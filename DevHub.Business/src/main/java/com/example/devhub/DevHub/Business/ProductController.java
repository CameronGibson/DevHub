package com.example.devhub.DevHub.Business;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {
	
	@Autowired
	FetchDataService fetchDataService;

	
	//hits the database and receives all products.
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(path = "/getAllModels")
	List<TDModel> findAllModels () {
		return fetchDataService.findAll();
	}
	
	/*
	 * Gets one element specified by an id.
	 * Temporarily converting the long to an int here.
	 * Figured i will eventually get user input as a Long.
	 * */
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(path = "/getModelById")
	Optional<TDModel> findModelById(Long id) {
		Long newId = Long.valueOf(2);
		return fetchDataService.findById(newId);
	}
	
	
}
