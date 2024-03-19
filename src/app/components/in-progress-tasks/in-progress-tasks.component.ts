import {Component, Input} from '@angular/core';
import {TaskCardComponent} from "../task-card/task-card.component";
import {ITask} from "../../interfaces/ITask.type";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-in-progress-tasks',
  standalone: true,
  imports: [
    TaskCardComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './in-progress-tasks.component.html',
  styleUrl: './in-progress-tasks.component.css'
})
export class InProgressTasksComponent {
  @Input() tasks: ITask[] = []
}
