import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Task, TaskListFilterType} from '../../model';
import {TaskService} from '../task.service';

@Component({
  selector: 'mac-task-list-container',
  templateUrl: './task-list-container.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TaskListContainerComponent implements OnInit {

  tasks: Observable<Task[]>;
  taskFilterTypes: TaskListFilterType[] = ['all', 'open', 'done'];
  activeTaskFilterType = new BehaviorSubject<TaskListFilterType>('all');

  ngOnInit(): void {
    this.tasks = combineLatest([this.taskService.getTasks(), this.activeTaskFilterType]).pipe(
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

  constructor(private taskService: TaskService) {
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
