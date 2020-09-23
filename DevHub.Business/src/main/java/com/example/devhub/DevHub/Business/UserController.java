package com.example.devhub.DevHub.Business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

	@Autowired
	FetchUserService fetchUserService;
	
	//hits the database and receives all users.
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(path = "/getAllUsers")
	List<User> findAllUsers () {
		return fetchUserService.findAll();
	}
}
