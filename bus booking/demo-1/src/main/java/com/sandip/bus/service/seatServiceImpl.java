package com.sandip.bus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sandip.bus.dao.SeatDao;
import com.sandip.bus.pojo.Seat;

import jakarta.transaction.Transactional;


@Service
@Transactional
public class seatServiceImpl implements SeatService {
	
	
	@Autowired
	private SeatDao seatDao;

	@Override
	public List<Seat> getAvailableSeats(Long busId) {
		 return seatDao.findByBusIdAndStatus(busId, "available");
	}
	
	
	
}
