package com.example.nablebackend.repo;

import com.example.nablebackend.entities.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EventRepo extends JpaRepository<Event, Integer> {
    @Query("SELECT ev FROM Event ev WHERE LOWER(ev.tags) LIKE %:tag% ")
    List<Event> findEventByTag(@Param("tag") String tag);
}
