import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/listItems/app.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { FormComponent } from './components/listItems/form/form.component';
import { ListComponent } from './components/listItems/list/list.component';
import { ItemComponent } from './components/listItems/item/item.component';
import { TrackerComponent } from './components/listItems/tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    TransactionItemComponent,
    FormComponent,
    ListComponent,
    ItemComponent,
    TrackerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
