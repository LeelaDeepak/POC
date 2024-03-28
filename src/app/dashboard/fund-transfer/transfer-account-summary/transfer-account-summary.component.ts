import { Component } from '@angular/core';
import { RegisterService } from '../../../register.service';

@Component({
  selector: 'app-transfer-account-summary',
  templateUrl: './transfer-account-summary.component.html',
  styleUrl: './transfer-account-summary.component.css'
})
export class TransferAccountSummaryComponent {
  accountUserName:any =[]
  constructor(private service:RegisterService){}
  ngOnInit(){
    this.accountUserName.push(this.service.trimmedString)
  }

}
