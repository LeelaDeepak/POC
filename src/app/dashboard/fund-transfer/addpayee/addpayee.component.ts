import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../../../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpayee',
  templateUrl: './addpayee.component.html',
  styleUrl: './addpayee.component.css'
})
export class AddpayeeComponent {

  constructor(private service:RegisterService, private route:Router){}

  addPayeeForm = new FormGroup({
    fullname: new FormControl('',Validators.required),
    nickname: new FormControl('',Validators.required),
    bank: new FormControl('',Validators.required),
    accountNo: new FormControl('',Validators.required),
    reEnteraccountNo: new FormControl('',Validators.required),
  });

  

  banks = ['Hdfc', 'Axis', 'SBI', 'ICICI', 'StandardChart'];
  selectedBank = this.banks[0];

  onSelectBank(event: any) {
    this.selectedBank = event.target.value;
    console.log(this.selectedBank);
  }

  submitPayee() {
    this.addPayeeForm.value.bank = this.selectedBank;
    if (this.addPayeeForm.value.accountNo != '' &&
      this.addPayeeForm.value.bank != '' &&
      this.addPayeeForm.value.fullname != '' &&
      this.addPayeeForm.value.nickname != '' &&
      this.addPayeeForm.value.reEnteraccountNo != '') 
        { if (this.addPayeeForm.value.accountNo == this.addPayeeForm.value.reEnteraccountNo) {
            alert('Payee Added Successfully!!');
            console.log(this.addPayeeForm.value)
            this.service.addpayee.push(this.addPayeeForm.value);
            this.service.accountNo = this.service.addpayee[2].accountNo;
            this.service.reEnteraccountNo = this.service.addpayee[2].reEnteraccountNo;
            console.log(this.service.accountNo);
            console.log(this.service.reEnteraccountNo);
            console.log(this.service.addpayee)
            this.addPayeeForm.reset()
            this.route.navigate(['/transferDashboard'])
          } 
          else {
            alert('Account No Mismatched');
          }
    } else {
      alert('Fill The Payee Details');
    }
  }

  cancelSubmit() {
    this.addPayeeForm.reset();
  }

}
