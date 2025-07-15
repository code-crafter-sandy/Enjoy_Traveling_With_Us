package com.sandip.bus.dto;

import java.util.List;

import com.sandip.bus.pojo.Bus;
import com.sandip.bus.pojo.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Bookingdto {

	Long Busid;
	Long userid ;
	List<String > SetNumber;
	
	
	
}
