import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="padding:16px;font-family:Arial,Helvetica,sans-serif;">
      <h1>Mean Finance (Client)</h1>
      <nav>
        <button (click)="view='dashboard'">Dashboard</button>
        <button (click)="view='income'">Income</button>
        <button (click)="view='expense'">Expense</button>
      </nav>
      <hr/>
      <div [ngSwitch]="view">
        <app-dashboard *ngSwitchCase="'dashboard'"></app-dashboard>
        <app-income *ngSwitchCase="'income'"></app-income>
        <app-expense *ngSwitchCase="'expense'"></app-expense>
      </div>
    </div>
  `
})
export class AppComponent {
  view: string = 'dashboard';
}
