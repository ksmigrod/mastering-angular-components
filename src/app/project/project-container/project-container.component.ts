import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from '../../model';
import {ProjectService} from '../project.service';

@Component({
  selector: 'mac-project-container',
  templateUrl: './project-container.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectContainerComponent implements OnInit {
  selectedProject: Observable<Project>;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.selectedProject = this.projectService.getSelectedProject();
  }

}
