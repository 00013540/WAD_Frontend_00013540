import {Component, inject, Input} from '@angular/core';
import {ITask} from "../../interfaces/ITask.type";
import {PRIORITY} from "../../constants";
import {MatButtonModule} from "@angular/material/button";
import {DatePipe, NgIf} from "@angular/common";
import {StatusEnum} from "../../enums/TaskEnum.type";
import {ServiceTaskTrackerService} from "../../service-task-tracker.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatButtonModule, NgIf],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
  providers: [DatePipe],
})
export class TaskCardComponent {
  @Input() task: ITask | null = null
  router = inject(Router)
  serviceTaskTracker = inject(ServiceTaskTrackerService)
  PRIORITY = PRIORITY
  constructor(private datePipe: DatePipe) {}
  formatDateString(dateString: string): string {
    const date = new Date(dateString);
    return this.datePipe.transform(date, 'dd-MM-yyyy') || '';
  }

  moveToInProgress(task: ITask) {
    this.serviceTaskTracker.updateTask({
      ...task,
      status: StatusEnum.IN_PROGRESS
    }).subscribe(() => {
      window.location.reload()
    })
  }

  moveToDone(task: ITask) {
    this.serviceTaskTracker.updateTask({
      ...task,
      status: StatusEnum.DONE
    }).subscribe(() => {
      window.location.reload()
    })
  }

  editClicked(task: ITask) {
    this.router.navigateByUrl(`/edit/${task.id}`)
  }

  deleteClicked(task: ITask) {
    this.serviceTaskTracker.deleteTask(task.id).subscribe(() => {
      window.location.reload()
    })
  }
}
