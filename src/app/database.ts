import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Project, Task, User} from './model';

export class Database implements InMemoryDbService {

  createDb(): {} {
    const projects: Project[] = [
      {id: 1, title: 'My first project', description: 'This is your first project.'},
      {id: 2, title: 'My second project', description: 'This is your second project.'}
    ];

    const tasks: Task[] = [
      {id: 1, projectId: 1, title: 'Task 1', done: false},
      {id: 2, projectId: 1, title: 'Task 2', done: false},
      {id: 3, projectId: 1, title: 'Task 3', done: true},
      {id: 4, projectId: 1, title: 'Task 4', done: false}
    ];

    const users: User[] = [
      {id: 1, name: 'You', pictureUrl: '/assets/user.svg'}
    ];

    return {projects, tasks, users};
  }
}
