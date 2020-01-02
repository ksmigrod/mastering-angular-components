import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TaskService} from '../task.service';
import {Task} from 'src/app/model';

@Component({
  selector: 'mac-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask(title: string): void {
    this.taskService.addTask({title, done: false});
    this.tasks = this.taskService.getTasks();
  }

  updateTask(task: Task): void {
    this.taskService.updateTask(task);
    this.tasks = this.taskService.getTasks();
  }
}

