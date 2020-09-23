package com.example.devhub.DevHub.Business;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Models")
public class TDModel {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "Id")
	private Long id;
	
	@Column(name = "model_name")
	private String modelName;
	
	@Column(name = "model_description")
	private String modelDescription;
	
	@Column(name = "model_price")
	private Double modelPrice;
	
	@Column(name = "model_image")
	private String modelImage;
	
	@Column(name = "is_endorsed")
	private Boolean modelIsEndorsed;
	
	@Column(name = "publisher_name")
	private String publisherName;
	
	/*
	 * The default Product constructor
	 * Exist's only for the sake of JPA.
	 */
	public TDModel () {}
	
	public TDModel(Long id, String modelName, String modelDescription, Double modelPrice, String modelImage, Boolean modelIsEndorsed, String publisherName) {
		this.id = id;
		this.modelName = modelName;
		this.modelDescription = modelDescription;
		this.modelPrice = modelPrice;
		this.modelImage = modelImage;
		this.modelIsEndorsed = modelIsEndorsed;
		this.publisherName = publisherName;
	}

	public Long getId() {
		return id;
	}

	public String getModelName() {
		return modelName;
	}

	public String getModelDescription() {
		return modelDescription;
	}

	public Double getModelPrice() {
		return modelPrice;
	}

	public String getModelImage() {
		return modelImage;
	}

	public Boolean isModelIsEndorsed() {
		return modelIsEndorsed;
	}

	public String getPublisherName() {
		return publisherName;
	}
	
}
