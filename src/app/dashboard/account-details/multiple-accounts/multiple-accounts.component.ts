import { Component } from '@angular/core';
import { RegisterService } from '../../../register.service';

@Component({
  selector: 'app-multiple-accounts',
  templateUrl: './multiple-accounts.component.html',
  styleUrls: ['./multiple-accounts.component.css']
})
export class MultipleAccountsComponent {

  accountShow:boolean = false;
  savingsAccount:boolean = false
  loanAccount:boolean = false;
  creditAccount:boolean = false;
  overdraftAccount:boolean = false;

  constructor(private service:RegisterService){}

  getSavingsAccountDetails(){
    this.savingsAccount = !this.savingsAccount;
    this.loanAccount = false;
    this.creditAccount = false;
    this.overdraftAccount = false;
    this.service.accountObj.AccountType = "Savings Account";
    this.service.accountObj.AvailableBalanceinRupees = "1,81,680/-";
  }
 
  getLoanAccountDetails(){
    this.loanAccount = !this.loanAccount;
    this.savingsAccount = false;
    this.creditAccount = false;
    this.overdraftAccount = false;
    console.log(this.loanAccount)
    this.service.accountObj.AccountType = "Loan Account";
    this.service.accountObj.AvailableBalanceinRupees = "4,00,000/-";

  }

  getCreditCardDetails(){
    this.creditAccount = !this.creditAccount;
    this.savingsAccount = false;
    this.overdraftAccount = false;
    this.loanAccount = false;
    this.service.accountObj.AccountType = "Credit Card";
    this.service.accountObj.AvailableBalanceinRupees = "1,00,000/-";
  }

  getODAccountDetails(){
    this.overdraftAccount = !this.overdraftAccount;
    this.savingsAccount = false;
    this.loanAccount = false;
    this.creditAccount = false;
    this.service.accountObj.AccountType = "OverDraft Account";
    this.service.accountObj.AvailableBalanceinRupees = "1,81,680/-";
  }

}
