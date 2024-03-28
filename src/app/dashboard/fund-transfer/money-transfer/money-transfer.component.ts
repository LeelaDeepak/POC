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
    },
    {
      validators: this.accountNoMatchValidator
    })
   }

   accountNoMatchValidator(form: FormGroup) {
    const accNumber = form.get('accountNumber')?.value;
    const reEnterAccNumber = form.get('reEnterAccountNo')?.value;

    return accNumber === reEnterAccNumber ? null : { mismatch: true };
  }
  amountlimit:number = 5000
  newPayee = this.service.addpayee;
  accountNo = this.service.accountNo;
  reEnterAccountNo = this.service.reEnteraccountNo;
  totalAmount:number = 0;
  availBalance:number = this.service.balance

  calculateTotalAmount(){
    let mytotal=0;
    for(let i=0;i<this.service.paymentHistory.length;i++){
      mytotal += this.service.paymentHistory[i]
      console.log(mytotal);
    }
    this.totalAmount = mytotal;
    return this.totalAmount;
  }

  amountVal = this.calculateTotalAmount()
  onSubmit(value:any){
     if(this.moneyTransferForm.invalid){
        alert("Enter all fields");
        console.log("Enter all filelds")
     }
     else if(this.moneyTransferForm.value.amount > this.service.balance){
        alert("Insufficient Funds")
     }
     else if(this.moneyTransferForm.value.amount > this.amountlimit){
        alert("Exceeded Limit")
     }
     else if(this.amountVal > this.amountlimit){
        alert("Exceded Limit")
     }
     else{
      this.service.balance = this.service.balance - this.moneyTransferForm.value.amount;
      console.log(value)
      this.service.paymentHistory.push(Number(value.amount));
      console.log(this.service.paymentHistory)
      this.calculateTotalAmount();
      if(this.totalAmount > this.amountlimit){
         alert("Exceeded Limit")
      }
      else{
        this.route.navigate(['/paymentsuccess'])
        this.moneyTransferForm.reset()
      }
      
    }
     
  }

  


}
