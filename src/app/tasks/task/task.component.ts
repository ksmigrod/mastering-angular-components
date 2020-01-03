import {Component, EventEmitter, HostBinding, Input, Output, ViewEncapsulation} from '@angular/core';
import { Task } from 'src/app/model';

@Component({
  selector: 'mac-task',
  templateUrl: './task.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent {
  @Input() task: any;
  @Output() outUpdateTask = new EventEmitter<Task>();

  @HostBinding('class.done')
  get done() {
    return this.task && this.task.done;
  }

  updateTask(done: boolean): void {
    this.outUpdateTask.emit({...this.task, done});
  }

  updateTitle(title: string) {
    this.outUpdateTask.emit({...this.task, title});
  }
}
