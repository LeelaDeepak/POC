import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../../register.service';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrl: './money-transfer.component.css'
})
export class MoneyTransferComponent {

  
  moneyTransferForm!:FormGroup;
  constructor(private service:RegisterService,private fb:FormBuilder){
    // this.moneyTransferForm = new FormGroup({
    //   "payee":new FormControl('',Validators.required),
    //   "accountNumber":new FormControl('',Validators.required),
    //   "reEnterAccountNo":new FormControl('',Validators.required),
    //   "amount":new FormControl('',Validators.required),
    //   "remarks":new FormControl('',Validators.required),
    //   "paymentModeInput":new FormControl('',Validators.required)
    // })
    this.moneyTransferForm = fb.group({
       "payee":["Select Payee",[Validators.required]],
       "accountNumber":['',Validators.required],
      "reEnterAccountNo":['',Validators.required],
      "amount":['',Validators.required],
      "remarks":['',Validators.required],
      "paymentModeInput":['',Validators.required]
    })
   }
  newPayee = this.service.addpayee;
  // payeeName = this.newPayee[0].fullname;
 
  
  // onPayeeSelect(event:any){
  //   this.payeeName = event.target.value;
  //   console.log(event.target.value)
  // }

  onSubmit(){
    // this.moneyTransferForm.value.payee = this.payeeName;
    // if(this.moneyTransferForm.invalid){
    //   alert("Please Enter all Fields")
    // }
    // else{
    //   console.log(this.moneyTransferForm.value)
    // }
    console.log(this.moneyTransferForm.value)
  }


}
