import {Pipe, PipeTransform} from '@angular/core';
import { ToDo } from './todo/todo';

@Pipe({ name: 'filter'})

export class FilterPipe implements PipeTransform{

    transform(items: any[],filterText: string): ToDo[]  {

        if(!filterText){
            return items;
        }
        return items.filter((item: ToDo) => {
           return item.task.toLowerCase().includes(filterText.toLowerCase());
        })
      
    }

}

