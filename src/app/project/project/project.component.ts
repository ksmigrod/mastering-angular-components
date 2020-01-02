import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {Project} from '../../model';

@Component({
  selector: 'mac-project',
  templateUrl: './project.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent {
  @Input() project: Project;
}
