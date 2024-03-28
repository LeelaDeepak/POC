import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotInfoComponent } from './forgot-info/forgot-info.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountDashboardComponent } from './dashboard/account-details/account-dashboard/account-dashboard.component';
import { TransferDashboardComponent } from './dashboard/fund-transfer/transfer-dashboard/transfer-dashboard.component';
import { PaymentDashboardComponent } from './dashboard/payments/payment-dashboard/payment-dashboard.component';
import { AddpayeeComponent } from './dashboard/fund-transfer/addpayee/addpayee.component';
import { PaymentSuccessfullComponent } from './dashboard/fund-transfer/payment-successfull/payment-successfull.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path:"forgot-info", component:ForgotInfoComponent},
  {path:"registration", component:RegistrationComponent},
  {path:"dashboard", component:DashboardComponent},
  { path: "forgot-info", component: ForgotInfoComponent, canActivate: [AuthGuard] },
  {path:"accountDashboard",component:AccountDashboardComponent},
  {path:"paymentDashboard",component:PaymentDashboardComponent},
  {path:'transferDashboard',component:TransferDashboardComponent},
  {path:'addpayee',component:AddpayeeComponent},
  {path:'paymentsuccess',component:PaymentSuccessfullComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
