package com.sandip.bus.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sandip.bus.pojo.Seat;
import com.sandip.bus.service.SeatService;

@RestController
@RequestMapping("/seat")
@CrossOrigin(origins = "http://localhost:3000")
public class SeatController {

	
	@Autowired
	private  SeatService seatService;

	
	 @GetMapping("/{busId}")
	    public List<Seat> getAvailableSeats(@PathVariable Long busId) {
	        return seatService.getAvailableSeats(busId);
	    }
}
