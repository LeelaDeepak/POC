import { Component } from '@angular/core';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrl: './account-statement.component.css'
})
export class AccountStatementComponent {
  isDisableByDateStatement=false;
  isDisableByPeriodStatement=false;
  fromStatementDate='';
  toStatementDate='';
  minStatementRangeDate = new Date();
  showStatementmode="";
  todayDate = Date();

  arangeStatementDate(){
    this.minStatementRangeDate = new Date(this.fromStatementDate);
  }

  disablestatementbyDate(){
    this.isDisableByDateStatement=true;
    this.isDisableByPeriodStatement=false;
    this.showStatementmode = 'Show Statement By Date';
  }

  disablestatementbyPeriod(){
    this.isDisableByPeriodStatement=true;
    this.isDisableByDateStatement=false;
    this.showStatementmode = 'Show Statement By Period';
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
    if(this.showStatementmode=="Show Statement By Date"&&this.selectedStatementFromat!=""){
      if(this.fromStatementDate!="" && this.toStatementDate!=""){
        alert("Downloaded Statement from "+this.fromStatementDate+" to "+this.toStatementDate+" in "+this.selectedStatementFromat+"Format");
      }else{
        alert("Please Select Option and Choose dates")
      }
    }else if(this.showStatementmode=="Show Statement By Period"&&this.selectedStatementFromat!=""){
      alert("Downloaded Statement of "+this.selectStatementPeriod+" in "+this.selectedStatementFromat+"Format");
    }else{
      alert("Choose Option and Select The Fields To Download")
    }
  }

  cancelStatement(){
    this.isDisableByDateStatement=false;
    this.isDisableByPeriodStatement=false;
    this.selectedStatementFromat="";
  }


}
