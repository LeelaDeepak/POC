import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrl: './money-transfer.component.css'
})
export class MoneyTransferComponent {

  
  moneyTransferForm!:FormGroup;
  constructor(private service:RegisterService,private fb:FormBuilder,private route:Router){
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

  onSubmit(value:any){
     if(this.moneyTransferForm.invalid){
        alert("Enter all fields");
        console.log("Enter all filelds")
     }
     else{
      console.log(value)
      this.route.navigate(['/paymentsuccess'])
      this.moneyTransferForm.reset()
      
     }
     
  }


}
