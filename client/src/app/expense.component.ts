import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-expense',
  template: `
    <h2>Expense</h2>
    <form (submit)="add($event)">
      <input name="category" placeholder="Category" required [(ngModel)]="model.category" />
      <input name="amount" placeholder="Amount" required type="number" [(ngModel)]="model.amount" />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li *ngFor="let i of items">
        {{i.category}} - {{i.amount}} 
        <button (click)="remove(i._id)">Delete</button>
      </li>
    </ul>
  `
})
export class ExpenseComponent {
  model:any = {category:'', amount:0};
  items:any[] = [];

  constructor(){
    this.load();
  }
  load(){
    axios.get('http://localhost:5000/api/expenses').then(r=> this.items = r.data || []);
  }
  add(e:any){
    e.preventDefault();
    axios.post('http://localhost:5000/api/expenses', this.model).then(()=> {
      this.model = {category:'', amount:0};
      this.load();
    });
  }
  remove(id:string){
    axios.delete('http://localhost:5000/api/expenses/'+id).then(()=> this.load());
  }
}
