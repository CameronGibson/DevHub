package com.example.devhub.DevHub.Business;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity.BodyBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


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
			System.out.println(newTDModel.toString());
			//data is sent as string so try to store it as a string and just convert to image when it is retrieved from the db
			//try parsing the JSON
			fetchDataService.save(newTDModel);	
	}
	
	/*
	@PostMapping("/postModel")
	    public void addTDModel(@RequestBody TDModel newTDModel, @RequestParam("imageFile") MultipartFile file) throws IOException {
	        System.out.println("Original Image Byte Size - " + file.getBytes().length);
	        newTDModel.setModelImage(file.getBytes());
	        fetchDataService.save(newTDModel);
	    }
	
	// compress the image bytes before storing it in the database
	
	    public static byte[] compressBytes(byte[] data) {
	        Deflater deflater = new Deflater();
	        deflater.setInput(data);
	        deflater.finish();
	        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
	        byte[] buffer = new byte[1024];
	        while (!deflater.finished()) {
	            int count = deflater.deflate(buffer);
	            outputStream.write(buffer, 0, count);
	        }
	        try {
	            outputStream.close();
	        } catch (IOException e) {
	        }
	        System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);
	        return outputStream.toByteArray();
	    }
	    
	    // uncompress the image bytes before returning it to the angular application
	    public static byte[] decompressBytes(byte[] data) {
	        Inflater inflater = new Inflater();
	        inflater.setInput(data);
	        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
	        byte[] buffer = new byte[1024];
	        try {
	            while (!inflater.finished()) {
	                int count = inflater.inflate(buffer);
	                outputStream.write(buffer, 0, count);
	            }
	            outputStream.close();
	        } catch (IOException ioe) {
	        } catch (DataFormatException e) {
	        }
	        return outputStream.toByteArray();
	    }
	*/
}
