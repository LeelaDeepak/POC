import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrl: './money-transfer.component.css'
})
export class MoneyTransferComponent {

  moneyTransferForm!:FormGroup;
  constructor(){
    this.moneyTransferForm = new FormGroup({
      "Payee":new FormControl('',Validators.required),
      "accountNumber":new FormControl('',Validators.required),
      "reEnterAccountNo":new FormControl('',Validators.required),
      "amount":new FormControl('',Validators.required),
      "remarks":new FormControl('',Validators.required),
      "paymentModeInput":new FormControl('',Validators.required)
    })
  }

  onSubmit(){
    if(this.moneyTransferForm.invalid){
      alert("Please Enter all Fields")
    }
    else{
      console.log(this.moneyTransferForm.value)
    }
  }

}
