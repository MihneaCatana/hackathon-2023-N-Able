package com.example.nablebackend.controller;

import com.example.nablebackend.entities.Event;
import com.example.nablebackend.entities.EventDTO;
import com.example.nablebackend.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/events")
public class EventController {
    @Autowired
    EventService eventService;
    @GetMapping()
    public ResponseEntity<List<EventDTO>> getEvents(@RequestParam(required = false) String tag){
        if(tag!=null){
            //get events with tag
            List<EventDTO> filteredEvents = eventService.getEventsWithTag(tag);
            return filteredEvents.isEmpty()?ResponseEntity.status(HttpStatus.NOT_FOUND).build():ResponseEntity.ok(filteredEvents);
        }
        return ResponseEntity.ok(eventService.getEvents());
    }
}
