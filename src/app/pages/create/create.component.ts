import {Component, inject} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInput} from "@angular/material/input";
import {MatFormField} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatButtonModule} from "@angular/material/button";
import {MatLabel} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {ITaskCreate} from "../../interfaces/ITask.type";
import {Router} from "@angular/router";
import {ServiceTaskTrackerService} from "../../service-task-tracker.service";

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [MatLabel, MatButtonModule, MatFormField, MatSelectModule, MatDatepickerModule, MatInput, NgIf, ReactiveFormsModule, FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  router = inject(Router)
  serviceTaskTracker = inject(ServiceTaskTrackerService)
  newTask: ITaskCreate = {
    title: '',
    description: '',
    dueDate: '',
    status: 0,
    priority: 0
  }

  goBackHome() {
    this.router.navigateByUrl('/')
  }

  createTask() {
    this.serviceTaskTracker.createTask({
      ...this.newTask,
    }).subscribe(() => {
      this.router.navigateByUrl('/')
    })
  }
}
