import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {TaskService} from '../task.service';
import {Task, TaskListFilterType} from 'src/app/model';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'mac-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent {
  @Input() tasks: Task[];
  @Input() taskFilterTypes: TaskListFilterType[];
  @Input() activeTaskFilterType: TaskListFilterType;

  @Output() outAddTask = new EventEmitter<string>();
  @Output() outUpdateTask = new EventEmitter<Task>();
  @Output() outActivateFilterType = new EventEmitter<TaskListFilterType>();


  activateFilterType($event: string) {
    this.outActivateFilterType.emit($event as TaskListFilterType);
  }

  addTask($event: string) {
    this.outAddTask.emit($event);
  }

  updateTask($event: Task) {
    this.outUpdateTask.emit($event);
  }
}

