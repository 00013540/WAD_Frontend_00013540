import {Component} from '@angular/core';
import {TaskCardComponent} from "../task-card/task-card.component";

@Component({
  selector: 'app-new-tasks',
  standalone: true,
  imports: [TaskCardComponent],
  templateUrl: './new-tasks.component.html',
  styleUrl: './new-tasks.component.css'
})
export class NewTasksComponent {

}
