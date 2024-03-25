import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.css'
})
export class AccountDetailsComponent {
 constructor(private router: Router){}

  getTransction(){
    // this.router.navigateByUrl('/transaction-history')

  }

}
