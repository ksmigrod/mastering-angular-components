import { Injectable } from '@angular/core';
import { Task } from '../model';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TaskService {
  private tasks = new BehaviorSubject<Task[]>([]);

  constructor(private http: HttpClient) {
    this.loadTasks();
  }

  getTasks(): Observable<Task[]> {
    return this.tasks.asObservable();
  }

  addTask(task: Task): void {
    this.http.post<Task>('/api/tasks', task)
      .subscribe(() => this.loadTasks());
  }

  updateTask(task: Task): void {
    this.http.put<Task>(`/api/tasks/${task.id}`, task)
      .subscribe(() => this.loadTasks());
  }

  private loadTasks() {
    this.http.get<Task[]>('/api/tasks')
      .subscribe(tasks => this.tasks.next(tasks));
  }
}
