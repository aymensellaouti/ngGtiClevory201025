import { Component } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';
import { CanLeaveInterface } from 'src/app/guards/can-leave.interface';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
    imports: [NgFor, FormsModule]
})
export class TodoComponent implements CanLeaveInterface {
  todos: Todo[] = [];
  todo = new Todo();
  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }
  canLeave(): boolean {
    if(!this.todo.name.trim() && !this.todo.content.trim() ) return true;
    return false;
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
