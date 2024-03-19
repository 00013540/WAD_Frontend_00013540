import {Injectable, inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_API_URL} from "./constants";
import {ITask, ITaskCreate} from "./interfaces/ITask.type";

@Injectable({
  providedIn: 'root'
})
export class ServiceTaskTrackerService {
  httpClient = inject(HttpClient)

  constructor() {
  }

  getTasks() {
    return this.httpClient.get<ITask[]>(`${BASE_API_URL}/UserTasksController_00013540/getall`);
  }

  getTask(id: number) {
    return this.httpClient.get<ITask>(`${BASE_API_URL}/UserTasksController_00013540/get-by-id?id=${id}`);
  }

  createTask(task: ITaskCreate) {
    return this.httpClient.post<ITaskCreate>(`${BASE_API_URL}/UserTasksController_00013540/add`, task);
  }

  updateTask(task: ITask) {
    return this.httpClient.post<ITask>(`${BASE_API_URL}/UserTasksController_00013540/update`, task);
  }

  deleteTask(id: number) {
    return this.httpClient.post<boolean>(`${BASE_API_URL}/UserTasksController_00013540/delete`, null, {params: {id: id.toString()}});
  }
}
