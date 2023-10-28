package com.example.nablebackend.entities;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class EventDTO {
    private UserDTO user;
    private Event event;

    public EventDTO(Event event, User user) {
        this.event = event;
        this.user = new UserDTO(user);
    }
}
