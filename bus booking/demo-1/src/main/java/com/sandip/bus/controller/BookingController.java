package com.sandip.bus.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sandip.bus.dto.Bookingdto;
import com.sandip.bus.service.ReservationService;

@RestController
@RequestMapping("/booking")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {
	
	
	@Autowired
	private ReservationService reservationService;
	

	 @PostMapping("/book-seat")
	    public ResponseEntity<?> bookSeats(@RequestBody Bookingdto request) throws Exception {
	        Long userId = request.getUserid();
	        Long busId = request.getBusid();
	        List<String> seatNumbers = request.getSetNumber();

	        
	        return ResponseEntity.ok(reservationService.bookSeats(userId, busId, seatNumbers));
	    }
	
	
	
	
	
}
