package com.sandip.bus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sandip.bus.dao.RatingReviewdao;
import com.sandip.bus.pojo.RatingReview;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class RatingServiceImpl implements RatingService {

	@Autowired
	private RatingReviewdao ratingReviewdao;
	
	@Override
	public List<RatingReview> GetAllratings() {
		
		
		
	return ratingReviewdao.findAll();
		
	}

}
