import { ITask } from "../models/ITask";
import { PENDING } from "./Status";

export const DEFAULT_TASKS: ITask[] = [
  { id: '1', title: 'Add new tasks', status: PENDING },
];