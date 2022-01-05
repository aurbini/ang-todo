import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
export { TodosComponent } from './todos/components/todos/todos.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
