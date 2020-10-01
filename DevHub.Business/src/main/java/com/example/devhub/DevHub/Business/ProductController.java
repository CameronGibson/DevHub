package com.example.devhub.DevHub.Business;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {
	
	@Autowired
	FetchDataService fetchDataService;
	
	//hits the database and GET's all products.
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(path = "/getAllModels")
	List<TDModel> findAllModels () {
		return fetchDataService.findAll();
	}
	
	//POST's a new object in the database.
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(path = "/postModel")
	void addTDModel(@RequestBody TDModel newTDModel) {
		fetchDataService.save(newTDModel);
	}
	
	
}
