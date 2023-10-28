package com.example.nablebackend.repo;

import com.example.nablebackend.entities.EventParticipation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventParticipationRepo extends JpaRepository<EventParticipation, Integer> {
}
