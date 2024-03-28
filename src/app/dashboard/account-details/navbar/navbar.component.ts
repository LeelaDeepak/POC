import { Component } from '@angular/core';
import { RegisterService } from '../../../register.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private service:RegisterService){}

 
  accountDetails(){
    this.service.breadCrumb.pop()
    this.service.breadCrumb.push("Account Details")
  }

  paymentsClick(){
    this.service.breadCrumb.pop();
    this.service.breadCrumb.push("Payments");
  }

  transferClick(){
    this.service.breadCrumb.pop();
    this.service.breadCrumb.push("Transfer")

  }
}
