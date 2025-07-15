package com.sandip.bus.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sandip.bus.custom_exception.ApiException;
import com.sandip.bus.custom_exception.AuthenticationException;
import com.sandip.bus.dao.AdminDao;
import com.sandip.bus.dao.UserDao;
import com.sandip.bus.dto.ApiResponse;
import com.sandip.bus.dto.AuthRequest;
import com.sandip.bus.dto.RegistrationDTO;
import com.sandip.bus.pojo.Admin;
import com.sandip.bus.pojo.User;

import jakarta.transaction.Transactional;



@Service
@Transactional
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDao userdao;
	
	@Override
	public List<User> GetAllUeser() {
	
	
		return 	userdao.findAll();
	}


	@Override
	public ApiResponse statusupdate(Long id) {
		
	User u = userdao.findById(id)
			.orElseThrow(()-> new ApiException("invalid id"));
		if(u.getStatus()=='A'){
			u.setStatus('D');
		
		}else {
			u.setStatus('A');
			
		}
		return null;
	}
}
