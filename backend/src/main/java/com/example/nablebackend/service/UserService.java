package com.example.nablebackend.service;

import com.example.nablebackend.entities.User;
import com.example.nablebackend.repo.UserRepo;
import com.example.nablebackend.utils.StringEncryptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;

    public User save(User user){
        user.setPassword(StringEncryptor.encrypt(user.getPassword()));
        this.userRepo.save(user);
        user.setPassword(StringEncryptor.decrypt(user.getPassword()));
        return user;
    }
}
