import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TaskListComponent} from './tasks/task-list/task-list.component';
import {TaskComponent} from './tasks/task/task.component';
import {EnterTaskComponent} from './tasks/enter-task/enter-task.component';
import {CheckboxComponent} from './ui/checkbox/checkbox.component';
import {TaskService} from './tasks/task.service';
import {ToggleComponent} from './ui/toggle/toggle.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {Database} from './database';
import {TaskListContainerComponent} from './tasks/task-list-container/task-list-container.component';
import {ProjectService} from './project/project.service';
import {ProjectComponent} from './project/project/project.component';
import { ProjectContainerComponent } from './project/project-container/project-container.component';
import { TabsComponent } from './ui/tabs/tabs/tabs.component';
import { NavigationItemComponent } from './ui/navigation-item/navigation-item/navigation-item.component';
import { NavigationSectionComponent } from './ui/navigation-section/navigation-section/navigation-section.component';
import { NavigationComponent } from './ui/navigation/navigation/navigation.component';
import { EditorComponent } from './ui/editor/editor/editor.component';
import { ProfilePictureComponent } from './user/profile-picture/profile-picture/profile-picture.component';
import { UserAreaComponent } from './user/user-area/user-area/user-area.component';
import { FromNowPipe } from './pipes/from-now.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    EnterTaskComponent,
    CheckboxComponent,
    ToggleComponent,
    TaskListContainerComponent,
    ProjectComponent,
    ProjectContainerComponent,
    TabsComponent,
    NavigationItemComponent,
    NavigationSectionComponent,
    NavigationComponent,
    EditorComponent,
    ProfilePictureComponent,
    UserAreaComponent,
    FromNowPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(Database, {delay: 0})
  ],
  providers: [ProjectService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
