import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderbookingComponent } from './components/orderbooking/orderbooking.component';
import { OrderComponent } from './components/order/order.component';
import { ReportComponent } from './components/report/report.component';
import { AdminComponent } from './components/admin/admin.component';
import { AccountComponent } from './components/account/account.component';

const routes: Routes = [
  { path: '', component:  LoginComponent },
  { path: 'login', component:  LoginComponent },
  { path: 'dashboard', component:  DashboardComponent },
  { path: 'orderbooking', component:  OrderbookingComponent },
  { path: 'order', component:  OrderComponent },
  { path: 'report', component:  ReportComponent },
  { path: 'home', component:  HomeComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'account', component: AccountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
