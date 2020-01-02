import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TaskService} from '../task.service';
import {Task, TaskListFilterType} from 'src/app/model';

@Component({
  selector: 'mac-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  filteredTasks: Task[];
  taskFilterTypes: TaskListFilterType[] = ['all', 'open', 'done'];
  activeTaskFilterType: TaskListFilterType = 'all';

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.filterTasks();
  }

  addTask(title: string): void {
    this.taskService.addTask({title, done: false});
    this.tasks = this.taskService.getTasks();
    this.filterTasks();
  }

  updateTask(task: Task): void {
    this.taskService.updateTask(task);
    this.tasks = this.taskService.getTasks();
    this.filterTasks();
  }

  activateFilterType(type: string): void {
    this.activeTaskFilterType = type as TaskListFilterType;
    this.filterTasks();
  }

  private filterTasks() {
    this.filteredTasks =
      this.tasks.filter(task => {
        switch (this.activeTaskFilterType) {
          case 'all':
            return true;
          case 'done':
            return task.done;
          case 'open':
            return !task.done;
        }
      });
  }
}

