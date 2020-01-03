export interface Task {
  readonly id?: number;
  readonly projectId?: number;
  readonly title: string;
  readonly done: boolean;
}

export type TaskListFilterType = 'all' | 'open' | 'done';

export interface Project {
  readonly id?: number;
  readonly title: string;
  readonly description: string;
}

export interface Tab {
  readonly id: string;
  readonly title: string;
}

export interface User {
  readonly id?: number;
  readonly name: string;
  readonly pictureUrl: string;
}
