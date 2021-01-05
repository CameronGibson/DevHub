package com.example.devhub.DevHub.Business;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
@Repository
public interface FetchDataService extends JpaRepository<TDModel,Integer>{

	//get all database entries.
	@Override
	List<TDModel> findAll();
	
	}
