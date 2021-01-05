package com.example.devhub.DevHub.Business;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "Models")
public class TDModel {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)//maybe try .IDENTITY
	@Column(name = "Id")
	private Long id;
	
	@Column(name = "model_name")
	private String modelName;
	
	@Column(name = "model_description")
	private String modelDescription;
	
	@Column(name = "model_price")
	private Double modelPrice;
	
	@Lob
	@Column(name = "model_image", length = 1000)
	private byte[] modelImage;
	
	@Column(name = "is_endorsed")
	private Boolean modelIsEndorsed;
	
	@Column(name = "publisher_name")
	private String publisherName;
	
	/*
	 * The default Product constructor
	 * Exist's only for the sake of JPA.
	 */
	public TDModel () {}
	
	public TDModel(Long id, String modelName, String modelDescription, Double modelPrice, byte[] modelImage, Boolean modelIsEndorsed, String publisherName) {
		this.id = id;
		this.modelName = modelName;
		this.modelDescription = modelDescription;
		this.modelPrice = modelPrice;
		this.modelImage = modelImage; //encode as base64 here. try calling a function to do the work.
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

	public byte[] getModelImage() {
		return modelImage;	
	}

	public void setModelImage(byte[] modelImage) {
		this.modelImage = modelImage;
	}

	public Boolean isModelIsEndorsed() {
		return modelIsEndorsed;
	}

	public String getPublisherName() {
		return publisherName;
	}

	@Override
	public String toString() {
		return "TDModel [id=" + id + ", modelName=" + modelName + ", modelDescription=" + modelDescription
				+ ", modelPrice=" + modelPrice + ", modelImage=" + Arrays.toString(modelImage) + ", modelIsEndorsed="
				+ modelIsEndorsed + ", publisherName=" + publisherName + "]";
	}
	
	
	
}
