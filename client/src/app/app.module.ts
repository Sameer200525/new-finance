import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { IncomeComponent } from './income.component';
import { ExpenseComponent } from './expense.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppComponent,
    DashboardComponent,
    IncomeComponent,
    ExpenseComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
