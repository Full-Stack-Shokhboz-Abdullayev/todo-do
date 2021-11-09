import { ITask } from "./task.interface";

export interface IResponsePlural {
  success: boolean;
  statusCode: number;
  data: ITask;
}
export interface IResponseSingular {
  success: boolean;
  statusCode: number;
  data: ITask;
}
