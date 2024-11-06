import { PENDING, COMPLETED } from '../constants/Status';

export interface ITask {
  id: string;
  title: string;
  status: typeof PENDING | typeof COMPLETED;
}
