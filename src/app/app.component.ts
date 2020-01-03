import {Component, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {Project, User} from './model';
import {ProjectService} from './project/project.service';
import {TaskService} from './tasks/task.service';
import {UserService} from './user/user.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'mac-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  user: Observable<User>;
  openTasksCount: Observable<number>;
  projects: Observable<Project[]>;
  selectedProject: Observable<Project>;

  constructor(private projectService: ProjectService, private taskService: TaskService, private userService: UserService) {
    this.projects = this.projectService.getProjects();
    this.selectedProject = this.projectService.getSelectedProject();
    this.user = this.userService.getCurrentUser();
    this.openTasksCount = this.taskService.getTasks()
      .pipe(
        map(tasks => tasks.filter(task => !task.done).length)
      );
  }

  selectProject(id: number) {
    this.projectService.selectProject(id);
  }
}
