import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-transaction',
  templateUrl: './recent-transaction.component.html',
  styleUrl: './recent-transaction.component.css'
})
export class RecentTransactionComponent {

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

}
