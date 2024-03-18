import {Component, inject} from '@angular/core';
import {DoneTasksComponent} from "../../components/done-tasks/done-tasks.component";
import {InProgressTasksComponent} from "../../components/in-progress-tasks/in-progress-tasks.component";
import {NewTasksComponent} from "../../components/new-tasks/new-tasks.component";
import {ServiceTaskTrackerService} from "../../service-task-tracker.service";
import {ITask} from "../../interfaces/ITask.type";
import {StatusEnum} from "../../enums/TaskEnum.type";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DoneTasksComponent,
    InProgressTasksComponent,
    NewTasksComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  serviceTaskTracker = inject(ServiceTaskTrackerService)
  newTasks: ITask[] = []
  inProgressTasks: ITask[] = []
  doneTasks: ITask[] = []

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
}
