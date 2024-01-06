package com.Backend.services;

import com.Backend.models.Status;
import com.Backend.models.Task;
import com.Backend.repositories.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TaskService implements ITaskService {
    private final TaskRepository taskRepository;

    @Override
    public boolean registerTask(Task task) {
        try {
            if (task == null) {
                throw new Exception("Task is null !");
            }
            if (task.getTitle().isEmpty()) {
                throw new Exception("The title is empty !");
            }
            if (task.getDescription().isEmpty()) {
                throw new Exception("The description is empty !");
            }
            task.setStatus(Status.Not_Started);
            taskRepository.saveAndFlush(task);
            return true;
        } catch (Exception exception) {
            System.out.println(exception.getMessage());
            return false;
        }

    }

    @Override
    public boolean editTask(UUID id, Task task) {
        try {
            Task found = taskRepository.findById(id).orElse(null);
            if (task == null || found == null) {
                throw new Exception("Task not found !");
            }
            if (!task.getTitle().isEmpty()) {
                found.setTitle(task.getTitle());
            }
            if (!task.getDescription().isEmpty()) {
                found.setDescription(task.getDescription());
            }
            if (task.getStatus() != null) {
                found.setStatus(task.getStatus());
            }
            task.setStatus(found.getStatus());
            taskRepository.saveAndFlush(found);
            return true;
        } catch (Exception exception) {
            System.out.println(exception.getMessage());
            return false;
        }
    }

    @Override
    public boolean deleteTask(UUID id) {
        try {
            Task found = taskRepository.findById(id).orElse(null);
            if (found == null) {
                throw new Exception("Task not found !");
            }
            taskRepository.delete(found);
            taskRepository.flush();
            return true;
        } catch (Exception exception) {
            System.out.println(exception.getMessage());
            return false;
        }
    }

    @Override
    public List<Task> loadTasks() {
        return taskRepository.findAll();
    }
}
