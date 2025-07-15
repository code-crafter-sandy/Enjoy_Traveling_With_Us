package com.sandip.bus.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sandip.bus.pojo.Seat;

public interface SeatDao extends JpaRepository<Seat, Long> {

	 List<Seat> findByBusId(Long busId);
	 List<Seat> findByBusIdAndStatus(Long busId, String status);
}
