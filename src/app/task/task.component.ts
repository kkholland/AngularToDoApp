import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from '../todo/todo';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  @Input() tasks: ToDo[] | null = null;
  @Input() task: ToDo | null = null;
  @Input() i: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  //This used to work when the X button was on the parent
  removeTask(i:number){
    console.log(this.tasks); // This logs null... how to pull tasks down or send info up?
    this.tasks?.splice(i,1);
  }

}
