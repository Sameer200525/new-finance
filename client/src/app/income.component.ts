import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-income',
  template: `
    <h2>Income</h2>
    <form (submit)="add($event)">
      <input name="source" placeholder="Source" required [(ngModel)]="model.source" />
      <input name="amount" placeholder="Amount" required type="number" [(ngModel)]="model.amount" />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li *ngFor="let i of items">
        {{i.source}} - {{i.amount}} 
        <button (click)="remove(i._id)">Delete</button>
      </li>
    </ul>
  `
})
export class IncomeComponent {
  model:any = {source:'', amount:0};
  items:any[] = [];

  constructor(){
    this.load();
  }
  load(){
    axios.get('http://localhost:5000/api/incomes').then(r=> this.items = r.data || []);
  }
  add(e:any){
    e.preventDefault();
    axios.post('http://localhost:5000/api/incomes', this.model).then(()=> {
      this.model = {source:'', amount:0};
      this.load();
    });
  }
  remove(id:string){
    axios.delete('http://localhost:5000/api/incomes/'+id).then(()=> this.load());
  }
}
