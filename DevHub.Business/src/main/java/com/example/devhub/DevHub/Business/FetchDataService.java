package com.example.devhub.DevHub.Business;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
@Repository
public interface FetchDataService extends JpaRepository<TDModel,Integer>{

	@Override
	List<TDModel> findAll();
	
	Optional<TDModel> findById(Long id);
	
	}
