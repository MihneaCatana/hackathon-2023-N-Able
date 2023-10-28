package com.example.nablebackend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private LocalDateTime date;

    private String description;
    private String location;
    private Float ticketPrice;
    private Integer noSpots;

    private String photoUrl;

    @ManyToOne
    @JoinColumn(name = "userId")
    @JsonIgnore
    private User user;
}
