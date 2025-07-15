package com.sandip.bus.pojo;





import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "rating_reviews")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class RatingReview  extends BaseEntity{

	

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;  // User who gave the rating


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "bus_id", nullable = false)
    private Bus bus;  // Bus being rated
    
    @Column(nullable = false)
    private int rating;  // Rating between 1 and 5

    @Column(length = 500)
    private String review;  // Review text
}
