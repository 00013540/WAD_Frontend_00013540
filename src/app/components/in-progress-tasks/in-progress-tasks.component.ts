import {Component} from '@angular/core';
import {TaskCardComponent} from "../task-card/task-card.component";

@Component({
  selector: 'app-in-progress-tasks',
  standalone: true,
  imports: [
    TaskCardComponent
  ],
  templateUrl: './in-progress-tasks.component.html',
  styleUrl: './in-progress-tasks.component.css'
})
export class InProgressTasksComponent {

}
