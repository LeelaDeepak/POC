import { Component } from '@angular/core';
import { RegisterService } from '../../../register.service';


@Component({
  selector: 'app-tabviews',
  templateUrl: './tabviews.component.html',
  styleUrl: './tabviews.component.css',
})
export class TabviewsComponent {

  constructor(private reg:RegisterService){}
  activeTab: number = 1;

  ngOnInit(){
    if(this.reg.isTransactionHistory){
      this.activeTab=2;
      this.reg.isTransactionHistory=false;
    }else if(this.reg.isAccountStatement){
      this.activeTab=3;
      this.reg.isAccountStatement=false;
    }
  }

  activateTab(tabNo: number) {
    this.activeTab = tabNo;
  }
}
