import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
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
  @Output() removed = new EventEmitter<ToDo>();

  constructor() { }

  ngOnInit(): void {
  }

  completeTask(){
    if(this.task){
      this.task.complete = true
    }
  }

  remove(){
    if(this.task){
      this.removed.emit(this.task);
    } 
  }

}
