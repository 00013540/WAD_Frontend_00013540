import {Component, Input} from '@angular/core';
import {TaskCardComponent} from "../task-card/task-card.component";
import {ITask} from "../../interfaces/ITask.type";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-new-tasks',
  standalone: true,
  imports: [TaskCardComponent, NgForOf],
  templateUrl: './new-tasks.component.html',
  styleUrl: './new-tasks.component.css'
})
export class NewTasksComponent {
  @Input() tasks: ITask[] = []
}
