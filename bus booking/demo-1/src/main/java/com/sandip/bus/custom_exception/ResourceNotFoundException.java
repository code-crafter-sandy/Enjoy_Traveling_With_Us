package com.sandip.bus.custom_exception;

public class ResourceNotFoundException extends RuntimeException {
	public ResourceNotFoundException(String mesg) {
		super(mesg);
	}
}
