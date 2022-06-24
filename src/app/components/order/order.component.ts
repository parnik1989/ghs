import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { ColDef } from 'ag-grid-community';
import { Constants } from 'src/app/helper/constants';
import { DashboardService } from 'src/app/services/dashboard.service';
import { RestService } from 'src/app/services/rest.service';
import { Doctor, Lab, TestType } from 'src/app/types/DataType';
import { OrderbookingComponent } from '../orderbooking/orderbooking.component';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  selected = new FormControl(0);

  labDataList: Array<Lab> = new Array<Lab>();
  doctorDataList: Array<Doctor> = new Array<Doctor>();
  testTypeDataList: Array<TestType> = new Array<TestType>();

  constructor(public dialog: MatDialog,
              public dashboardService: DashboardService,
              private restService: RestService) {

   }

  ngOnInit(): void {
    this.loadLabsByFranchisee();
    this.loadDoctorsByFranchisee();
    this.loadAllTestTypes();
    let tabNumber = this.dashboardService.getTabNumber();
    if (tabNumber) {
      this.selected.setValue(tabNumber );
    }
  }

  private loadDoctorsByFranchisee() {
    this.restService.GetData(Constants.GET_ALL_DOCTORS_URL).subscribe ( doctorData => {
      console.log(doctorData);
      if (doctorData.status == 200) {
        doctorData.body.forEach((doctor: Doctor) => {
          this.doctorDataList.push(doctor);
        });
      }  
    });
      
  }

  private loadLabsByFranchisee() {
    this.restService.GetData(Constants.GET_ALL_LABS_URL).subscribe ( labData => {
      console.log(labData);
      if (labData.status == 200) {
        labData.body.forEach((lab: Lab) => {
          this.labDataList.push(lab);
        });
      }  
    });
  }

  private loadAllTestTypes() {
    this.restService.GetData(Constants.GET_ALL_TEST_TYPE_URL).subscribe ( testTypeData => {
      console.log(testTypeData);
      if (testTypeData.status == 200) {
        testTypeData.body.forEach((testType: TestType) => {
          this.testTypeDataList.push(testType);
        });
      }  
    });
  }

  openNewOrder(): void {
    const addDoctorRef = this.dialog.open(OrderbookingComponent, {
      panelClass: 'custom-dialog-container',
      width: '90%',
      height: '80%',
      maxWidth: '1000px',
      data:{"lab":this.labDataList,"doctor": this.doctorDataList,"testType": this.testTypeDataList}
    });

    addDoctorRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'+result);
      this.selected.setValue(2);
    });
  }

  public columnDefs: ColDef[] = [
    { field: 'bookingId' , filter: 'agTextColumnFilter', headerName: 'Booking ID', width: 200},
    { field: 'date' , sortable: true, filter: 'agDateColumnFilter', headerName: 'Booking Date', width: 200 },
    { field: 'name' , sortable: true, filter: 'agTextColumnFilter', headerName: 'Patient Name', width: 300},
    { field: 'lab' , sortable: true, filter: 'agTextColumnFilter', headerName: 'Lab Name' , width: 300},
    { field: 'doctor' , sortable: true, filter: 'agTextColumnFilter', headerName: 'Reffered By' , width: 300},
    { field: 'amount' , sortable: true, filter: 'agNumberColumnFilter', headerName: 'Amount'},
    { field: 'status' , sortable: true, filter: 'agTextColumnFilter', headerName: 'Status'},
    { field: 'detail' , sortable: true}
  ];

  public rowData = [
    { bookingId: 'GHS0001001',date: '23/03/2022', name: 'Smt. Renuka Devi', lab: 'Magadh Janch Ghar', doctor :'Dr. Y. K. Singh', status:'Completed', amount:'1500'},
    { bookingId: 'GHS0001002',date: '03/04/2022', name: 'Smt. Rekha Devi', lab: 'Magadh Janch Ghar', doctor :'Dr. Y. K. Singh', status:'Completed', amount:'1500'},
    { bookingId: 'GHS0001003',date: '23/01/2022', name: 'Smt. Muni Devi', lab: 'Awadh Janch Ghar', doctor :'Dr. Rahul Kumar', status:'Completed', amount:'1500'},
    { bookingId: 'GHS0001004',date: '23/02/2022', name: 'Smt. Renuka Devi', lab: 'Modern Janch Ghar', doctor :'Dr. Rajeev Singh', status:'Completed', amount:'1500'},
    { bookingId: 'GHS0001005',date: '21/03/2022', name: 'Smt. Renuka Devi', lab: 'Gautam Janch Ghar', doctor :'Dr. Y. K. Sinha', status:'Completed', amount:'1500'},
    { bookingId: 'GHS0001006',date: '26/03/2022', name: 'Smt. Renuka Devi', lab: 'Magadh Janch Ghar', doctor :'Dr. Y. K. Singh', status:'Completed', amount:'1500'},
    { bookingId: 'GHS0001007',date: '15/03/2022', name: 'Smt. Renuka Devi', lab: 'Magadh Janch Ghar', doctor :'Dr. M. K. Sharma', status:'Completed', amount:'1500'},
    { bookingId: 'GHS0001008',date: '22/03/2022', name: 'Smt. Renuka Devi', lab: 'Magadh Janch Ghar', doctor :'Dr. Y. K. Singh', status:'Completed', amount:'1500'},
    { bookingId: 'GHS0001009',date: '20/03/2022', name: 'Smt. Renuka Devi', lab: 'Magadh Janch Ghar', doctor :'Dr. Y. K. Singh', status:'Completed', amount:'1500'},
  ];



}
