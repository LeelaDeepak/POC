import { Component } from '@angular/core';
import { RegisterService } from '../../../register.service';

@Component({
  selector: 'app-account-holder-details',
  templateUrl: './account-holder-details.component.html',
  styleUrls: ['./account-holder-details.component.css']
})
export class AccountHolderDetailsComponent {
  constructor(private service:RegisterService){}
  userName: string=""
  breadCrumbPath:any[] = []

  ngOnInit(){
    this.userName = this.service.trimmedString
    console.log(this.userName)
    this.breadCrumbPath = this.service.breadCrumb
    console.log(this.breadCrumbPath)
  }
 

}
