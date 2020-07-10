import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './../interfaces/todo';
import { MainService } from 'src/app/services/main-service.service';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {
  constructor(private mainService: MainService) { }

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
