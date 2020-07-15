/* export interface Todo {
  id: string | number;
  task: string;
  completed: boolean;
} */

export class Todo {
  id?: string | number;
  title = '';
  completed = false;
  userId: string | number;

  constructor(values: any = {}) {
    Object.assign(this, values);
  }
}
