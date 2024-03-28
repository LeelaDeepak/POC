import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../register.service';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent{

   constructor(private service:RegisterService){}

  isDisplay:boolean = false;
  loanAccountSummary:any = [];
  accountUserName:any = [];

  ngOnInit(){
    this.loanAccountSummary.push(this.service.accountObj);
    // console.log(this.loanAccountSummary)
    this.accountUserName.push(this.service.trimmedString)
    // console.log(this.accountUserName)

  }
  

 


}
