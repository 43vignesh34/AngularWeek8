import { Component } from '@angular/core';

interface transaction{
  id:number,
  description: string,
  amount:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    totalIncome: number=0;
    totalExpenses:number=0;
    availableBalance: number=0;
    computeTotalIncome(transactions:transaction[]){
      this.totalIncome=transactions.reduce((accumulator,transaction)=> accumulator+parseFloat(transaction.amount),0);
    }
    computeTotalExpenses(transactions:transaction[]){
      this.totalIncome=transactions.reduce((accumulator,transaction)=> accumulator+parseFloat(transaction.amount),0);
    }
    computeAvailableBalance(transactions:any):void{
      this.availableBalance = this.totalIncome-this.totalExpenses;
    }
    onIncomeChange(transactions: any) {
      this.computeTotalIncome(transactions);
       this.computeAvailableBalance(transactions);
    }
  
    onExpenseChange(transactions: any) {
      this.computeTotalExpenses(transactions);
      this.computeAvailableBalance(transactions);
    }
}




