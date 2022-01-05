import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from 'src/app/app.component';
import { TodosModule } from 'src/app/todos/todos.module';

@NgModule({
  declarations: [AppComponent],
  imports: [TodosModule, AppRoutingModule, BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
