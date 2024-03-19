import {Component, inject} from '@angular/core';
import {DoneTasksComponent} from "../../components/done-tasks/done-tasks.component";
import {InProgressTasksComponent} from "../../components/in-progress-tasks/in-progress-tasks.component";
import {NewTasksComponent} from "../../components/new-tasks/new-tasks.component";
import {ServiceTaskTrackerService} from "../../service-task-tracker.service";
import {ITask} from "../../interfaces/ITask.type";
import {StatusEnum} from "../../enums/TaskEnum.type";
import {MatButtonModule} from "@angular/material/button";
import {Router} from "@angular/router";
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DoneTasksComponent,
    InProgressTasksComponent,
    NewTasksComponent,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router = inject(Router)
  serviceTaskTracker = inject(ServiceTaskTrackerService)
  newTasks: ITask[] = []
  inProgressTasks: ITask[] = []
  doneTasks: ITask[] = []

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.getTasks()
  }

  getTasks() {
    this.serviceTaskTracker.getTasks().subscribe((tasks) => {
      this.newTasks = tasks.filter((task) => task.status === StatusEnum.NEW)
      this.inProgressTasks = tasks.filter((task) => task.status === StatusEnum.IN_PROGRESS)
      this.doneTasks = tasks.filter((task) => task.status === StatusEnum.DONE)
    })
  }

  createTask() {
    this.router.navigateByUrl('/create')
  }
}
