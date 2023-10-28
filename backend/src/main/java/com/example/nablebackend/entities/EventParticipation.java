package com.example.nablebackend.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "eventParticipation")
public class EventParticipation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne
    @JoinColumn(name = "userId", referencedColumnName = "id")
    private User user;

    @OneToOne
    @JoinColumn(name = "eventId", referencedColumnName = "id")
    private Event event;

}
