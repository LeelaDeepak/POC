import { Component } from '@angular/core';

@Component({
  selector: 'app-account-dashboard',
  templateUrl: './account-dashboard.component.html',
  styleUrl: './account-dashboard.component.css'
})
export class AccountDashboardComponent {
  isloaded=false;
 
  ngOnInit(){
    setInterval(()=>{
      this.isloaded=true;
    },1000);
   
  }
}
