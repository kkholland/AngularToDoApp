import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  newTask: string = '';
  filterTask: string = '';

  tasks: ToDo[] = [
    {task: 'fold clothes',
    complete: false},
    {task: 'put clothes in dresser',
    complete: false},
    {task: 'relax',
    complete: false},
    {task: 'try to pet cat',
    complete: true},
    {task: 'pet dog',
    complete: false},
    {task: 'be awesome',
    complete: false}
  ];


  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    this.tasks?.push({
      task: this.newTask,
      complete: false,
    });
    this.newTask = '';
  }

  // removeTask(i:number){
  //   this.tasks?.splice(i,1);
  // }

}
