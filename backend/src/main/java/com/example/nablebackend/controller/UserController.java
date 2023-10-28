package com.example.nablebackend.controller;

import com.example.nablebackend.entities.User;
import com.example.nablebackend.entities.UserDTO;
import com.example.nablebackend.service.UserService;
import com.example.nablebackend.utils.StringEncryptor;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping
    public ResponseEntity<UserDTO> saveUser(@RequestBody User user) {
        User userResp = userService.findByEmail(user.getEmail());
        if (userResp != null) {
            return ResponseEntity.status(HttpStatus.FOUND).body(null);
        }
        User usr = userService.save(user);
        UserDTO userDTO = new UserDTO(user);
        if (usr != null) {
            URI uri = ServletUriComponentsBuilder
                    .fromCurrentRequest()
                    .path("/{id}")
                    .buildAndExpand(usr.getId())
                    .toUri();
            return ResponseEntity.created(uri).body(userDTO);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> getUser(@RequestBody User user) {
        if (user.getEmail() != null && user.getPassword() != null) {
            User userResp = userService.findUserEmailPass(user.getEmail(), user.getPassword());
            if (userResp != null) {
                return ResponseEntity.status(HttpStatus.OK).body(new UserDTO(userResp));
            }
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }
}
