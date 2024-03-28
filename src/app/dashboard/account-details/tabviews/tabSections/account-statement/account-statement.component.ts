import { Component } from '@angular/core';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrl: './account-statement.component.css'
})
export class AccountStatementComponent {
  
  fromStatementDate='';
  toStatementDate='';
  showStatementmode="";
  todayDate = Date();
  showflag="";

  showWithDate(){
    this.showflag = "Show With Date";
  }

  showWithPeriod(){
    this.showflag = "Show With Period";
  }

  

  statementPeriod=[
    "Last 7 Days","Last 14 Days"
  ];
  selectStatementPeriod=this.statementPeriod[0];

  onSelectStatementPeriod(event:any){
    this.selectStatementPeriod= event.target.value;
    console.log(this.selectStatementPeriod);
  }

  statementFormats=[
    "PDF File","Excel Sheet"
  ];
  selectedStatementFromat=this.statementFormats[0];

  onSelectStatementFormat(event:any){
    this.selectedStatementFromat = event.target.value;
    console.log(this.selectedStatementFromat);
  }



  

  



  submitStatement(){
    if(this.showflag=="Show With Date" && this.fromStatementDate!=""&& this.toStatementDate!=""&&this.selectedStatementFromat!=""){
      alert("Downloaded Statement from "+this.fromStatementDate+" to "+this.toStatementDate+" in "+this.selectedStatementFromat+"Format");
    }else if(this.showflag=="Show With Period" && this.selectedStatementFromat!=""){
      alert("Downloaded Statement of "+this.selectStatementPeriod+" in "+this.selectedStatementFromat+"Format");
    }else{
      alert("Choose Option and Select The Fields To Download");
    }
  }

  cancelStatement(){
    this.selectedStatementFromat="";
  }


}
