import { Component } from '@angular/core';
import {TaskCardComponent} from "../task-card/task-card.component";

@Component({
  selector: 'app-done-tasks',
  standalone: true,
  imports: [
    TaskCardComponent
  ],
  templateUrl: './done-tasks.component.html',
  styleUrl: './done-tasks.component.css'
})
export class DoneTasksComponent {

}
