package com.sandip.bus.service;
import java.util.List;

import com.sandip.bus.pojo.Seat;
public interface SeatService {
	 public List<Seat> getAvailableSeats(Long busId);
}
