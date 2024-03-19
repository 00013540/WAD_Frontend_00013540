import {Component, inject} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {Router} from "@angular/router";
import {ServiceTaskTrackerService} from "../../service-task-tracker.service";
import {ITaskCreate} from "../../interfaces/ITask.type";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    MatSuffix,
    ReactiveFormsModule
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  router = inject(Router)
  activatedRoute = inject(ActivatedRoute)
  serviceTaskTracker = inject(ServiceTaskTrackerService)
  editTask: ITaskCreate = {
    title: '',
    description: '',
    dueDate: '',
    status: 0,
    priority: 0
  }

  ngOnInit() {
    this.getTask()
  }

  goBackHome() {
    this.router.navigateByUrl('/')
  }

  getTask() {
    const id = this.activatedRoute.snapshot.params['id']
    this.serviceTaskTracker.getTask(id).subscribe((task) => {
      this.editTask = task
    })
  }

  updateTask() {
    this.serviceTaskTracker.updateTask({
      ...this.editTask,
      id: this.activatedRoute.snapshot.params['id']
    }).subscribe(() => {
      this.router.navigateByUrl('/')
    })
  }
}
