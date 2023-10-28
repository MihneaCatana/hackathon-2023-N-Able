package com.example.nablebackend.repo;

import com.example.nablebackend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer> {
}
