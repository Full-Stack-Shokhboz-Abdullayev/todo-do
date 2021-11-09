export interface ITask {
  id: string | number;

  title: string;

  description: string;

  completed: boolean;

  important: boolean;

  due_date: string | Date;
}
