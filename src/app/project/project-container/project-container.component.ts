import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from 'rxjs';
import {Project, Tab} from '../../model';
import {ProjectService} from '../project.service';

@Component({
  selector: 'mac-project-container',
  templateUrl: './project-container.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectContainerComponent implements OnInit {
  selectedProject: Observable<Project>;
  tabs: Tab[];
  activeTab: Tab;

  constructor(private projectService: ProjectService) {
    this.tabs = [{id: 'tasks', title: 'Tasks'}, {id: 'comments', title: 'Comments'}, {id: 'activities', title: 'Activities'}];
    this.activeTab = this.tabs.find(tab => tab.id === 'tasks');
  }

  ngOnInit() {
    this.selectedProject = this.projectService.getSelectedProject();
  }

  activateTab($event: Tab) {
    this.activeTab = $event;
  }
}
