import { Injectable } from '@angular/core';
import { Task } from '../model';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class TaskService {
  private tasks = new BehaviorSubject<Task[]>([]);

  constructor(private http: HttpClient) {
    this.loadTasks();
  }

  getTasks(): Observable<Task[]> {
    return this.tasks.asObservable();
  }

  getProjectTasks(projectId: number) {
    return this.tasks.asObservable().pipe(
      map(tasks => tasks.filter(task => task.projectId === projectId))
    );
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
