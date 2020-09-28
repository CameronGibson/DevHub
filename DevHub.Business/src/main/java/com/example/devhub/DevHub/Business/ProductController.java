package com.example.devhub.DevHub.Business;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductController {
	
	@Autowired
	FetchDataService fetchDataService;
	
	//hits the database and GET's all products.
	@GetMapping(path = "/getAllModels")
	List<TDModel> findAllModels () {
		return fetchDataService.findAll();
	}
	
	//POST's a new object in the database.
	@PostMapping(path = "/postModel")
	void addTDModel(@RequestBody TDModel newTDModel) {
		fetchDataService.save(newTDModel);
	}
	
	
}
