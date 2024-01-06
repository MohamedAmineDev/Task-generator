package com.Backend.controllers;

import com.Backend.models.Task;
import com.Backend.services.ITaskService;
import com.Backend.services.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class TaskController implements ITaskService {
    private final TaskService taskService;

    @Override
    @PostMapping("/register_task")
    public boolean registerTask(@RequestBody Task task) {
        return taskService.registerTask(task);
    }

    @Override
    @PutMapping("/edit_task/{id}")
    public boolean editTask(@PathVariable("id") UUID id, @RequestBody Task task) {
        return taskService.editTask(id, task);
    }

    @Override
    @DeleteMapping("/delete_task/{id}")
    public boolean deleteTask(@PathVariable("id") UUID id) {
        return taskService.deleteTask(id);
    }

    @Override
    @GetMapping("/load_tasks")
    public List<Task> loadTasks() {
        return taskService.loadTasks();
    }
}
