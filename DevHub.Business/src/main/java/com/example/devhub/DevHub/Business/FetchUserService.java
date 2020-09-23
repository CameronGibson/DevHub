package com.example.devhub.DevHub.Business;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FetchUserService extends JpaRepository<User,Integer> {
	
	List<User> findAll();

}
