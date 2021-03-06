import { IGeneric } from 'attiv';

import Task from '../../entities/Task';

export default interface ITaskService extends IGeneric<Task> {
  createIsValid(item);
  getFindTaskByTitle(name: string);
}
