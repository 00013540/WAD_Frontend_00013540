import {Component, Input} from '@angular/core';
import {TaskCardComponent} from "../task-card/task-card.component";
import {ITask} from "../../interfaces/ITask.type";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-done-tasks',
  standalone: true,
  imports: [
    TaskCardComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './done-tasks.component.html',
  styleUrl: './done-tasks.component.css'
})
export class DoneTasksComponent {
  @Input() tasks: ITask[] = []
}
