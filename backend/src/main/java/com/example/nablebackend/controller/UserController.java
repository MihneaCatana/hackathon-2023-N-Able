package com.example.nablebackend.controller;

import com.example.nablebackend.entities.User;
import com.example.nablebackend.service.UserService;
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
    public ResponseEntity<User> saveUser(@RequestBody User user){
        User usr = userService.save(user);
        if (usr != null) {
            URI uri = ServletUriComponentsBuilder
                    .fromCurrentRequest()
                    .path("/{id}")
                    .buildAndExpand(usr.getId())
                    .toUri();
            return ResponseEntity.created(uri).body(user);
        }else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }
}
