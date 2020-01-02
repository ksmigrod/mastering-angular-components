import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'mac-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent {
  tasks: {id: number, title: string, done: boolean}[] = [
    {id: 1, title: 'Task 1', done: false},
    {id: 2, title: 'Task 2', done: true}
  ];

  addTask(title: string): void {
    this.tasks.push({
      id: this.generateNextId(this.tasks),
      title,
      done: false
    });
  }

  private generateNextId(tasks: {id: number}[]): number {
    return tasks
      .map(t => t.id)
      .reduce(
        (previousValue, currentValue) =>
          previousValue > currentValue ? previousValue : currentValue,
        Number.MIN_SAFE_INTEGER);
  }
}

