import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotInfoComponent } from './forgot-info/forgot-info.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountDetailsComponent } from './dashboard/account-details/account-details.component';
import { PaymentsComponent } from './dashboard/payments/payments.component';
import { FundTransferComponent } from './dashboard/fund-transfer/fund-transfer.component';
import { NavbarComponent } from './dashboard/account-details/navbar/navbar.component';
import { AccountHolderDetailsComponent } from './dashboard/account-details/account-holder-details/account-holder-details.component';
import { MultipleAccountsComponent } from './dashboard/account-details/multiple-accounts/multiple-accounts.component';
import { AccountSummaryComponent } from './dashboard/account-details/account-summary/account-summary.component';
import { AccountDashboardComponent } from './dashboard/account-details/account-dashboard/account-dashboard.component';
import { TabviewsComponent } from './dashboard/account-details/tabviews/tabviews.component';
import { TransferDashboardComponent } from './dashboard/fund-transfer/transfer-dashboard/transfer-dashboard.component';
import { TransferAccountSummaryComponent } from './dashboard/fund-transfer/transfer-account-summary/transfer-account-summary.component';
import { MoneyTransferComponent } from './dashboard/fund-transfer/money-transfer/money-transfer.component';
import { SelectBillerComponent } from './dashboard/payments/select-biller/select-biller.component';
import { PaymentDashboardComponent } from './dashboard/payments/payment-dashboard/payment-dashboard.component';
import { RecentTransactionComponent } from './dashboard/account-details/tabviews/tabSections/recent-transaction/recent-transaction.component';
import { TransactionHistoryComponent } from './dashboard/account-details/tabviews/tabSections/transaction-history/transaction-history.component';
import { AccountStatementComponent } from './dashboard/account-details/tabviews/tabSections/account-statement/account-statement.component';
import { AddpayeeComponent } from './dashboard/fund-transfer/addpayee/addpayee.component';
import { PaymentSuccessfullComponent } from './dashboard/fund-transfer/payment-successfull/payment-successfull.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotInfoComponent,
    RegistrationComponent,
    DashboardComponent,
    AccountDetailsComponent,
    PaymentsComponent,
    FundTransferComponent,
    NavbarComponent,
    AccountHolderDetailsComponent,
    MultipleAccountsComponent,
    AccountSummaryComponent,
    AccountDashboardComponent,
    TabviewsComponent,
    TransferDashboardComponent,
    TransferAccountSummaryComponent,
    MoneyTransferComponent,
    SelectBillerComponent,
    PaymentDashboardComponent,
    RecentTransactionComponent,
    TransactionHistoryComponent,
    AccountStatementComponent,
    AddpayeeComponent,
    PaymentSuccessfullComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
