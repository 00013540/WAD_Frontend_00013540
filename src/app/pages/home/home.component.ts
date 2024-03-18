import {Component} from '@angular/core';
import {DoneTasksComponent} from "../../components/done-tasks/done-tasks.component";
import {InProgressTasksComponent} from "../../components/in-progress-tasks/in-progress-tasks.component";
import {NewTasksComponent} from "../../components/new-tasks/new-tasks.component";

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

}
