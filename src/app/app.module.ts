import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderbookingComponent } from './components/orderbooking/orderbooking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportComponent } from './components/report/report.component';
import { OrderComponent } from './components/order/order.component';
import { AgGridModule } from 'ag-grid-angular';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { MatDialog, MatDialogModule  } from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import { AdminComponent } from './components/admin/admin.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SampleComponent } from './components/sample/sample.component';
import { AccountComponent } from './components/account/account.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
    OrderbookingComponent,
    ReportComponent,
    OrderComponent,
    ModalWindowComponent,
    AdminComponent,
    SampleComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTabsModule,
    AgGridModule.withComponents([]),
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'},MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
