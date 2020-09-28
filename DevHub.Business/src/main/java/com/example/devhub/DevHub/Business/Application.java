package com.example.devhub.DevHub.Business;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;

//not finding JPA repo
//then column name might be wrong??

@Configuration
@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
			System.out.println("Running on localhost:8080...");
	}
}
