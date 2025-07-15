package com.sandip.bus.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sandip.bus.service.RatingService;
import com.sandip.bus.service.UserService;

import io.swagger.v3.oas.models.responses.ApiResponse;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/User")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	
	@Autowired 
	private UserService userService;
	
	@Autowired
	private RatingService ratingService; 
	
	
	@GetMapping("/user")
	public ResponseEntity<?>GetAllUser(){
		return ResponseEntity.ok(userService.GetAllUeser());
	}
	
	@PutMapping("user/{id}")
	public ResponseEntity<?> UpdateStatus(@PathVariable Long id) {
		//TODO: process PUT request
		userService.statusupdate(id);
		
		return ResponseEntity.ok ("user staus updated");
	}
	
	@GetMapping("/rating")
//	@RequestMapping(value="/rating", method=RequestMethod.GET, produces="Application/JSON")
	public ResponseEntity<?>GetAllRating(){
		
		return ResponseEntity.ok(ratingService.GetAllratings());
	}
	
	

}
