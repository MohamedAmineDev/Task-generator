package com.Backend.models;

import lombok.Getter;

@Getter
public enum Status {
    Done("Done"),
    Not_Started("Not started"),
    Working_On_It("Working on it");

    private final String status;

    Status(String status) {
        this.status = status;
    }
}
