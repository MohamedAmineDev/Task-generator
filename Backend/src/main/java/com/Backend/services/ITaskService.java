package com.Backend.services;

import com.Backend.models.Task;

import java.util.List;
import java.util.UUID;

public interface ITaskService {
    boolean registerTask(Task task);

    boolean editTask(UUID id, Task task);

    boolean deleteTask(UUID id);

    List<Task> loadTasks();
}
