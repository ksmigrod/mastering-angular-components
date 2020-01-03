import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {Project} from '../model';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class ProjectService {

  private projects = new BehaviorSubject<Project[]>([]);
  private selectedProjectId = new BehaviorSubject<number>(1);
  private selectedProject: Observable<Project>;

  constructor(private http: HttpClient) {
    this.loadProjects();
    this.selectedProject = combineLatest([this.projects, this.selectedProjectId]).pipe(
      map(([projects, selectedProjectId]) => projects.find(project => project.id === selectedProjectId))
    );
  }

  private loadProjects(): void {
    this.http.get<Project[]>('/api/projects')
      .pipe(
        tap(t => console.log('loadedProjects', t))
      )
      .subscribe(projects => this.projects.next(projects));
  }

  updateProject(project: Project): void {
    this.http.put(`/api/projects/${project.id}`, project)
      .subscribe(() => this.loadProjects());
  }

  getProjects(): Observable<Project[]> {
    return this.projects.asObservable();
  }

  selectProject(projectId: number): void {
    this.selectedProjectId.next(projectId);
  }

  getSelectedProject(): Observable<Project> {
    return this.selectedProject;
  }
}
