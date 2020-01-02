import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {map, switchMap, take} from 'rxjs/operators';
import {Project, Task, TaskListFilterType} from '../../model';
import {TaskService} from '../task.service';
import {ProjectService} from '../../project/project.service';

@Component({
  selector: 'mac-task-list-container',
  templateUrl: './task-list-container.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TaskListContainerComponent implements OnInit {

  tasks: Observable<Task[]>;
  taskFilterTypes: TaskListFilterType[] = ['all', 'open', 'done'];
  activeTaskFilterType = new BehaviorSubject<TaskListFilterType>('all');
  selectedProject: Observable<Project>;

  ngOnInit(): void {
    this.selectedProject = this.projectService.getSelectedProject();
    this.tasks = combineLatest([this.selectedProject, this.activeTaskFilterType]).pipe(
      switchMap(([selectedProject, activeTaskFilterType]) => this.taskService.getProjectTasks(selectedProject.id).pipe(
        map((tasks) => ({tasks, activeTaskFilterType}))
      )),
      map(r => r.tasks.filter(task => {
        switch (r.activeTaskFilterType) {
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

  constructor(private taskService: TaskService, private projectService: ProjectService) {
  }

  addTask(title: string): void {
    this.selectedProject
      .pipe(
        take(1)
      )
      .subscribe(project =>
        this.taskService.addTask({title, projectId: project.id, done: false})
      );
  }

  updateTask(task: Task): void {
    this.taskService.updateTask(task);
  }

  activateFilterType(type: string): void {
    this.activeTaskFilterType.next(type as TaskListFilterType);
  }

}
