package com.example.nablebackend.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserDTO {
    private Integer id;
    private String username;
    private String email;
    private Boolean isAdmin;

    public UserDTO(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.email = user.getEmail();
        this.isAdmin = user.getIsAdmin();
    }
}
