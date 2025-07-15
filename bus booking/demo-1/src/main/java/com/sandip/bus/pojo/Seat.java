package com.sandip.bus.pojo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "seats")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class Seat  extends BaseEntity {
  

//    @ManyToOne
//    @JoinColumn(name = "bus_id")
//    private Bus bus;
//
//    private String seatNumber;
//    private boolean available;

	
	
	
	
	  @ManyToOne
	    @JoinColumn(name = "bus_id", nullable = false)
	    private Bus bus;

	    private String seatNumber;
	    private String status; // available, booked, reserved

	    @ManyToOne
	    @JoinColumn(name = "user_id", nullable = true)
	    private User user;

	    @ManyToOne
	    @JoinColumn(name = "booking_id", nullable = true)
	    private Reservation booking;
	
}