package com.lucianopaoletti.example.producer.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lucianopaoletti.example.producer.controllers.requests.EjecutarEventoRequest;

@RestController
public class EventsController {
	
	private KafkaTemplate<String, String> kafkaTemplate;
	
	Logger logger = LoggerFactory.getLogger(EventsController.class);
	
	@Autowired
	public EventsController(KafkaTemplate<String, String> kafkaTemplate) {
		this.kafkaTemplate = kafkaTemplate;
	}

	@PostMapping("/ejecutarEvento")
	public void ejecutarEvento(@RequestBody EjecutarEventoRequest request) {
		this.logger.info("Ejecutando evento...");
		this.kafkaTemplate.send("evento", request.message());
	}
	
}
