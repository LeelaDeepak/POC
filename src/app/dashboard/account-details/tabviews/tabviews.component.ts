import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tabviews',
  templateUrl: './tabviews.component.html',
  styleUrl: './tabviews.component.css',
})
export class TabviewsComponent {

  RecentTrans=[
    {
      symbol:'assets/down-arrow.svg',
      name:'Natasha Davel',
      transDate:'15/03/2024',
      transtype:'Credited',
      transDesc:'IMPS 1234/UPI123456/DIleep Thotakura/PhonePe',
      amountcredit:'$ 1,256.00',
      totAmount:'$ 1,11,256.00'
    },
    {
      symbol:'assets/upward-arrow.svg',
      name:'Fusion Restro',
      transDate:'15/03/2024',
      transtype:'Debited',
      transDesc:'123456/Fusion Restro',
      amountcredit:'$ 1,256.00',
      totAmount:'$ 1,10,256.00'
    },
    {
      symbol:'assets/down-arrow.svg',
      name:'Evoke Technologies',
      transDate:'15/03/2024',
      transtype:'Credited',
      transDesc:'IMPS 1234/UPI123456/DIleep Thotakura/PhonePe',
      amountcredit:'$ 1,256.00',
      totAmount:'$ 1,11,256.00'
    },
    {
      symbol:'assets/down-arrow.svg',
      name:'Bilnk It',
      transDate:'15/03/2024',
      transtype:'Credited',
      transDesc:'IMPS 1234/UPI123456/DIleep Thotakura/PhonePe',
      amountcredit:'$ 1,256.00',
      totAmount:'$ 1,11,256.00'
    },
    {
      symbol:'assets/down-arrow.svg',
      name:'Bilnk It',
      transDate:'15/03/2024',
      transtype:'Credited',
      transDesc:'IMPS 1234/UPI123456/DIleep Thotakura/PhonePe',
      amountcredit:'$ 1,256.00',
      totAmount:'$ 1,11,256.00'
    },
    {
      symbol:'assets/upward-arrow.svg',
      name:'Zerofourty Brewering',
      transDate:'15/03/2024',
      transtype:'Debited',
      transDesc:'123456/Fusion Restro',
      amountcredit:'$ 1,256.00',
      totAmount:'$ 1,10,256.00'
    },
    {
      symbol:'assets/down-arrow.svg',
      name:'Bilnk It',
      transDate:'15/03/2024',
      transtype:'Credited',
      transDesc:'IMPS 1234/UPI123456/DIleep Thotakura/PhonePe',
      amountcredit:'$ 1,256.00',
      totAmount:'$ 1,11,256.00'
    },
    {
      symbol:'assets/upward-arrow.svg',
      name:'Zerofourty Brewering',
      transDate:'15/03/2024',
      transtype:'Debited',
      transDesc:'123456/Fusion Restro',
      amountcredit:'$ 1,256.00',
      totAmount:'$ 1,10,256.00'
    },
    {
      symbol:'assets/upward-arrow.svg',
      name:'Zerofourty Brewering',
      transDate:'15/03/2024',
      transtype:'Debited',
      transDesc:'123456/Fusion Restro',
      amountcredit:'$ 1,256.00',
      totAmount:'$ 1,10,256.00'
    },
    {
      symbol:'assets/down-arrow.svg',
      name:'Bilnk It',
      transDate:'15/03/2024',
      transtype:'Credited',
      transDesc:'IMPS 1234/UPI123456/DIleep Thotakura/PhonePe',
      amountcredit:'$ 1,256.00',
      totAmount:'$ 1,11,256.00'
    }
  ];

  TransHistory=[
    {
      sno:"01",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"02",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"03",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"04",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"05",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"06",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"07",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"08",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"09",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"10",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"11",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"12",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"13",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"14",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"15",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"16",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"17",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"18",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"19",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"20",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"21",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"22",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"23",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"24",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"25",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"26",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"27",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"28",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"29",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    },
    {
      sno:"30",
      valueDate:"18/03/2024",
      transactionDate:"18/03/2024",
      transctionRemarks:"VIN/BLINKIT/202403031436/4063-09545745/Phone pe/Blinkit",
      withDrawalAmount:"314.45",
      depositAmount:"",
      balance:"1109.82",
      dayClosingBalance:"1109.82"
    }
  ];

  showPerpage=[5,10,15,20];
  selectedShowperPage=this.showPerpage[0];
  startIndex=0;
  endIndex=5;

  onSelectPageRows(event:any){
    this.selectedShowperPage= event.target.value;
    console.log(this.selectedShowperPage);
    this.endIndex = this.selectedShowperPage;
  }

  SecondPage(){

  }

  nextPage() {
    this.startIndex = this.endIndex;
    this.endIndex = Math.min(this.startIndex + this.selectedShowperPage, this.showPerpage.length);
  }

  previousPage() {
    this.endIndex = this.startIndex;
    this.startIndex = Math.max(this.endIndex - this.selectedShowperPage, 0);
  }


  
  

  



  activateTab(tabNo: number) {
    this.activeTab = tabNo;
  }

  constructor() {}
  activeTab: number = 1;
  isDisablebyDatefield = false;
  isDisableByPeriodfield = false;
  
  selectedOpt: string = '';
  fromTransDate = '';
  toTransDate = '';
  showMode = '';
  showData = false;
  sevenPeriodicDays = '7';
  fourteenPeriodicDays = '14';
  minRangeDate = new Date();
  todayDate = Date();
  
  

  arrangeToDate() {
    this.minRangeDate = new Date(this.fromTransDate);
  }

  disableDateField() {
    this.isDisablebyDatefield = true;
    this.isDisableByPeriodfield = false;
    this.showMode = 'ShowbyDate';
  }

  disablePeriodField() {
    this.isDisableByPeriodfield = true;
    this.isDisablebyDatefield = false;
    this.showMode = 'ShowbyPeriod';
  }

  periodicDays=[
    "Last 7 Days","Last 14 Days"
  ];
  selectedperidocday=this.periodicDays[0];

  onSelectPeriodicDays(event:any){
    this.selectedperidocday= event.target.value;
    console.log(this.selectedperidocday);
  }

  

  cancelField() {
    this.isDisablebyDatefield = false;
    this.isDisableByPeriodfield = false;
    this.showData = false;
  }

  submitField() {
    if (this.showMode == 'ShowbyDate') {
      if (this.fromTransDate != '' && this.toTransDate != '') {
        console.log('Showing Data in Table');
        this.showData = true;
      } else {
        console.log('Enter The Dates');
      }
    } else if (this.showMode == 'ShowbyPeriod' && this.selectedperidocday!="") {
      console.log("Show Table of " + this.selectedperidocday);
      this.showData=true;
    } else {
      alert('Please Choose The Options and Select Date or Period');
    }
  }

  isDisableByDateStatement=false;
  isDisableByPeriodStatement=false;
  fromStatementDate='';
  toStatementDate='';
  minStatementRangeDate = new Date();
  showStatementmode="";

  
  

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
