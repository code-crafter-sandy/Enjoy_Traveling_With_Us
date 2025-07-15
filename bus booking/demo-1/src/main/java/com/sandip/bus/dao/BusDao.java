package com.sandip.bus.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sandip.bus.pojo.Bus;

public interface BusDao extends JpaRepository<Bus, Long> {
	 List<Bus> findBySourceAndDestination(String source, String destination);
}
