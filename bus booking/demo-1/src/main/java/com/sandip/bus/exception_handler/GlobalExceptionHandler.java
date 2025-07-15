package com.sandip.bus.exception_handler;


import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.sandip.bus.custom_exception.AuthenticationException;
import com.sandip.bus.custom_exception.ResourceNotFoundException;
import com.sandip.bus.dto.ApiResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(MethodArgumentNotValidException.class)
	ResponseEntity<?>handleMethodArgumentNotValidException(MethodArgumentNotValidException e){
		
		List<FieldError> fieldErrors=e.getFieldErrors();
		Map<String, String >map=fieldErrors.stream()
				.collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));
		
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(map);
	}
	
	
	@ExceptionHandler(ResourceNotFoundException.class)
	@ResponseStatus(value = HttpStatus.NOT_FOUND )
	public ApiResponse handleResourceNotFoundException(ResourceNotFoundException e) {
		
		return new ApiResponse(e.getMessage());
	}
	
	@ExceptionHandler(AuthenticationException.class)
	@ResponseStatus(value=HttpStatus.UNAUTHORIZED)
	public ApiResponse handleAuthenticationException(ResourceNotFoundException e) {
		return new ApiResponse(e.getMessage());
	}
	
	
	
	
}
