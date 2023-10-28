package com.example.nablebackend.repo;

import com.example.nablebackend.entities.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepo extends JpaRepository<Event, Integer> {
}
