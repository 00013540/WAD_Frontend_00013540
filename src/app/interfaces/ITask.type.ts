export interface ITask {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  status: number;
  priority: number;
}

export interface ITaskCreate {
  title: string;
  description: string;
  dueDate: string;
  status: number;
  priority: number;
}
