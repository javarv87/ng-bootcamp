import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './../interfaces/todo';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(value: Todo[], args: string): Todo[] {
    let elements;

    switch (args) {
      case 'Completed':
        elements = value.filter(item => item.completed);
        break;

      case 'Pending':
        elements = value.filter(item => !item.completed);
        break;

      default:
        elements = value;
        break;
    }

    return elements;
  }

}
