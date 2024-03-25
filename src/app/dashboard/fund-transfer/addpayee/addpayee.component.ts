import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addpayee',
  templateUrl: './addpayee.component.html',
  styleUrl: './addpayee.component.css'
})
export class AddpayeeComponent {

  addPayeeForm = new FormGroup({
    fullname: new FormControl(),
    nickname: new FormControl(),
    bank: new FormControl(),
    accountNo: new FormControl(),
    reEnteraccountNo: new FormControl(),
  });

  banks = ['Hdfc', 'Axis', 'SBI', 'ICICI', 'StandardChart'];
  selectedBank = this.banks[0];

  onSelectBank(event: any) {
    this.selectedBank = event.target.value;
    console.log(this.selectedBank);
  }

  submitPayee() {
    this.addPayeeForm.value.bank = this.selectedBank;
    if (
      this.addPayeeForm.value.accountNo != '' &&
      this.addPayeeForm.value.bank != '' &&
      this.addPayeeForm.value.fullname != '' &&
      this.addPayeeForm.value.nickname != '' &&
      this.addPayeeForm.value.reEnteraccountNo != ''
    ) {
      if (
        this.addPayeeForm.value.accountNo ==
        this.addPayeeForm.value.reEnteraccountNo
      ) {
        alert('Payee Added Successfully!!');
      } else {
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
