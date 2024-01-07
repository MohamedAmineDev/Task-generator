package com.Backend.repositories;

import com.Backend.models.Status;
import com.Backend.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface TaskRepository extends JpaRepository<Task, UUID> {
    @Query("select t from Task t order by t.id ASC")
    public List<Task> loadTasks();

    @Query("select t from Task t where t.status=?1 order by t.title")
    public List<Task> loadTasksByStatus(Status status);
}
