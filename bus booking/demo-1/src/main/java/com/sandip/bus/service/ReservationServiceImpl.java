package com.sandip.bus.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.sandip.bus.dao.BusDao;
import com.sandip.bus.dao.ReservationDao;
import com.sandip.bus.dao.SeatDao;
import com.sandip.bus.dao.UserDao;
import com.sandip.bus.pojo.Bus;
import com.sandip.bus.pojo.Reservation;
import com.sandip.bus.pojo.Seat;
import com.sandip.bus.pojo.User;

import jakarta.transaction.Transactional;


@Transactional
@Service
public class ReservationServiceImpl implements ReservationService {
	private final ReservationDao reservationDao;
    private final SeatDao seatDao;
    private final BusDao busDao;
    private final UserDao userDao;

    public ReservationServiceImpl(ReservationDao bookingRepository, SeatDao seatRepository, 
    		BusDao busRepository, UserDao userRepository) {
        this.reservationDao = bookingRepository;
        this.seatDao = seatRepository;
        this.busDao = busRepository;
        this.userDao = userRepository;
    }
    
    
    
    
    
    
    @Override
    public Reservation bookSeats(Long userId, Long busId, List<String> seatNumbers) throws Exception {
        // Fetch bus details
        Optional<Bus> busOptional = busDao.findById(busId);
        if (busOptional.isEmpty()) {
            throw new Exception("Bus not found");
        }
        Bus bus = busOptional.get();

        // Check if user exists
        Optional<User> userOptional = userDao.findById(userId);
        if (userOptional.isEmpty()) {
            throw new Exception("User not found");
        }
        
        User user = userOptional.get();
        // Validate seat availability
        List<Seat> selectedSeats = seatDao.findByBusIdAndStatus(busId, "available")
                                                 .stream()
                                                 .filter(seat -> seatNumbers.contains(seat.getSeatNumber()))
                                                 .collect(Collectors.toList());

        if (selectedSeats.size() != seatNumbers.size()) {
            throw new Exception("Some selected seats are already booked.");
        }

        // Calculate total price
        double totalAmount = bus.getFarePerSeat() * seatNumbers.size();

        // Create Booking
        Reservation booking = new Reservation();
        booking.setUser(user);
        booking.setBus(bus);
        booking.setSeatNumbers(seatNumbers);
        booking.setTotalAmount(totalAmount);
        booking.setStatus("confirmed");
       

        booking = reservationDao.save(booking);

        // Update seat status
        for (Seat seat : selectedSeats) {
            seat.setStatus("booked");
            seat.setBooking(booking);
            seat.setUser(user);
        }
        seatDao.saveAll(selectedSeats);

        return booking;
    }
    
    
    
    
    
    
    
}
