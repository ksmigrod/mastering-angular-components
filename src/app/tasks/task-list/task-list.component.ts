import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TaskService} from '../task.service';
import {Task, TaskListFilterType} from 'src/app/model';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'mac-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit {
  filteredTasks: Observable<Task[]>;
  taskFilterTypes: TaskListFilterType[] = ['all', 'open', 'done'];
  activeTaskFilterType = new BehaviorSubject<TaskListFilterType>('all');

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.filteredTasks = combineLatest([this.taskService.getTasks(), this.activeTaskFilterType]).pipe(
      map(([tasks, activeTaskFilterType]) => tasks.filter(task => {
        switch (activeTaskFilterType) {
          case 'all':
            return true;
          case 'done':
            return task.done;
          case 'open':
            return !task.done;
        }
      }))
    );
  }

  addTask(title: string): void {
    this.taskService.addTask({title, done: false});
  }

  updateTask(task: Task): void {
    this.taskService.updateTask(task);
  }

  activateFilterType(type: string): void {
    this.activeTaskFilterType.next(type as TaskListFilterType);
  }
}

