package com.sandip.bus.service;

import java.util.List;

import com.sandip.bus.pojo.Reservation;

public interface ReservationService {
	public Reservation bookSeats(Long userId, Long busId, List<String> seatNumbers)throws Exception;
}
