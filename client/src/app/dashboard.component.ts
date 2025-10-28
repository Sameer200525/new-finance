import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-dashboard',
  template: `
    <h2>Dashboard</h2>
    <p>Totals (example):</p>
    <div>
      <strong>Income: </strong>{{incomeTotal}} |
      <strong>Expense: </strong>{{expenseTotal}} |
      <strong>Balance: </strong>{{incomeTotal - expenseTotal}}
    </div>
    <div style="margin-top:12px;">
      <canvas id="chart" width="400" height="200"></canvas>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  incomeTotal = 0;
  expenseTotal = 0;

  ngOnInit(){
    // Fetch totals from backend
    axios.get('http://localhost:5000/api/incomes').then(r=>{
      const incomes = r.data || [];
      this.incomeTotal = incomes.reduce((s:any,i:any)=> s + (i.amount||0), 0);
    });
    axios.get('http://localhost:5000/api/expenses').then(r=>{
      const expenses = r.data || [];
      this.expenseTotal = expenses.reduce((s:any,e:any)=> s + (e.amount||0), 0);
    });
    // Simple static chart sample - user can replace with ng2-charts
    setTimeout(()=>{
      const ctx = (document.getElementById('chart') as HTMLCanvasElement).getContext('2d');
      if(ctx){
        // dynamic import not possible here offline - keep minimal chart example
        const Chart = (window as any).Chart;
        if(Chart){
          new Chart(ctx, { type:'pie', data:{ labels:['Income','Expense'], datasets:[{ data:[this.incomeTotal||1,this.expenseTotal||1] }] } });
        }
      }
    },1000);
  }
}
