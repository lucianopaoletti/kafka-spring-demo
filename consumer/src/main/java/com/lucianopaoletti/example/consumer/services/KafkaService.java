package com.lucianopaoletti.example.consumer.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import reactor.core.publisher.Flux;
import reactor.kafka.receiver.KafkaReceiver;
import reactor.kafka.receiver.ReceiverRecord;

@Service
public class KafkaService {
	
	private KafkaReceiver<String, String> kafkaReceiver;
	
	@Autowired
	public KafkaService(KafkaReceiver<String, String> kafkaReceiver) {
		this.kafkaReceiver = kafkaReceiver;
	}
	
	public Flux<String> consumeEvents() {
		return this.kafkaReceiver.receive()
				.map(ReceiverRecord::value);
	}

}
