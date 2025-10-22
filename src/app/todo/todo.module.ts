import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo/todo.component";
import { WeekTodoComponent } from "./week-todo/week-todo.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { TodoRoutingModule } from "./todo-routing.module";
import { CommonModule } from "@angular/common";


@NgModule({
  // El7ajat eli tab3ini
  declarations: [
    TodoComponent,
    WeekTodoComponent
  ],
  // El 7ajet eli nest7a9hom
  imports:[
    FormsModule,
    TodoRoutingModule,
    CommonModule
  ],
  providers: [],
  // El 7at eli n7ab nsharihom m3a echabeb
  exports:[]
})
export class TodoModule {}
