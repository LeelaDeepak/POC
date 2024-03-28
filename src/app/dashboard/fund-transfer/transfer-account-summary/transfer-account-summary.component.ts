import { Component } from '@angular/core';
import { RegisterService } from '../../../register.service';

@Component({
  selector: 'app-transfer-account-summary',
  templateUrl: './transfer-account-summary.component.html',
  styleUrl: './transfer-account-summary.component.css'
})
export class TransferAccountSummaryComponent {
  accountUserName:any =[]
  accbalance:number=0;
  constructor(private service:RegisterService){}
  ngOnInit(){
    this.accountUserName.push(this.service.trimmedString)
    this.accbalance =  this.service.balance;
  }

}
