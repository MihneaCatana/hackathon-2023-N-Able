package com.example.nablebackend.controller;

import com.example.nablebackend.entities.Event;
import com.example.nablebackend.entities.EventDTO;
import com.example.nablebackend.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/events")
public class EventController {
    @Autowired
    EventService eventService;
    @GetMapping()
    public ResponseEntity<List<EventDTO>> getEvents(){
        return ResponseEntity.ok(eventService.getEvents());
    }
}
