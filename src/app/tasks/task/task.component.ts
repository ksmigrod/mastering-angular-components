import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'mac-task',
  templateUrl: './task.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent {
  @Input() task: any;
}
