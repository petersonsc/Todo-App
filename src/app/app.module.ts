import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodoDataService} from './todo-data.service';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoListItemComponent} from './todo-list-item/todo-list-item.component';
import {TodoListHeaderComponent} from './todo-list-header/todo-list-header.component';
import {TodoListFooterComponent} from './todo-list-footer/todo-list-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
