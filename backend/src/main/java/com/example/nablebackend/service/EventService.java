package com.example.nablebackend.service;

import com.example.nablebackend.entities.Event;
import com.example.nablebackend.entities.EventDTO;
import com.example.nablebackend.repo.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EventService {
    @Autowired
    EventRepo eventRepo;
    public Event save(Event event){
        return this.eventRepo.save(event);
    }

    public List<EventDTO> getEvents() {
        List<Event> events = this.eventRepo.findAll();
        List<EventDTO> dtoEvents = new ArrayList<>();
        for(Event event : events){
            dtoEvents.add(new EventDTO(event, event.getUser()));
        }
        return dtoEvents;
    }

    public List<EventDTO> getEventsWithTag(String tag) {
        List<Event> events = this.eventRepo.findEventByTag(tag);
        List<EventDTO> dtoEvents = new ArrayList<>();
        for(Event event : events){
            dtoEvents.add(new EventDTO(event, event.getUser()));
        }
        return dtoEvents;
    }
}
