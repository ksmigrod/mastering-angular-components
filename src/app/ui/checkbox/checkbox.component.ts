import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'mac-checkbox',
  templateUrl: './checkbox.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent {
  @Input() label: string;
  @Input() checked: boolean;
  @Output() outCheck = new EventEmitter<boolean>();


  check({target = {} as HTMLInputElement }) {
    this.outCheck.emit(target.checked);
  }
}
