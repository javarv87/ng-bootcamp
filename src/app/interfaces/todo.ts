/* export interface Todo {
  id: string | number;
  task: string;
  completed: boolean;
} */

export class Todo {
  id: string | number;
  task = '';
  completed = false;

  constructor(values: any = {}) {
    Object.assign(this, values);
  }
}
