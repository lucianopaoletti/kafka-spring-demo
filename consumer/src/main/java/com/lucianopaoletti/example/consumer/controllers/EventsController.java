package com.lucianopaoletti.example.consumer.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lucianopaoletti.example.consumer.services.KafkaService;

import reactor.core.publisher.Flux;

@CrossOrigin
@RestController
public class EventsController {
	
	private KafkaService kafkaService;
	
	@Autowired
	public EventsController(KafkaService kafkaService) {
		this.kafkaService = kafkaService;
	}
	
	@GetMapping(value = "/events", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
	public Flux<String> getEvents() {
		return this.kafkaService.consumeEvents();
	}

}
