package com.example.nablebackend.entities;

import java.util.ArrayList;
import java.util.List;

public enum Tags {
    Upcoming("Upcoming");
    private final String value;
    Tags(String value) {
        this.value = value;
    }

    public List<String> getTags(){
        List<String> tags = new ArrayList<>();
        for(Tags tag : Tags.values()){
            tags.add(tag.getValue());
        }
        return tags;
    }

    public String getValue(){
        return this.value;
    }
}
