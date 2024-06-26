import { Component } from '@angular/core';
import { RegisterService } from '../../../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private service:RegisterService,private route:Router){}

 
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
    this.service.breadCrumb.push("Transfer");
  

  }

}
