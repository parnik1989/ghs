import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import {MatDialog} from '@angular/material/dialog';
import { ModalWindowComponent } from '../modal-window/modal-window.component';
import { RestService } from 'src/app/services/rest.service';
import { Constants } from 'src/app/helper/constants';
import { Doctor, Franchisee, Lab, TestType } from 'src/app/types/DataType';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  selected = new FormControl(0);
  franchisee = new Franchisee();
  labDataList: Array<Lab> = new Array<Lab>();
  doctorDataList: Array<Doctor> = new Array<Doctor>();
  testTypeDataList: Array<TestType> = new Array<TestType>();

  public labData =  new Array<Lab>();
  public doctorData =  new Array<Doctor>();
  public testData =  new Array<TestType>();

  
  constructor(public dialog: MatDialog,
    private restService: RestService) { }

  ngOnInit(): void {
    this.loadFrenchiseeDetails();
    this.loadAllTestTypes();
    this.loadDoctorsByFranchisee();
    this.loadLabsByFranchisee();
  }

  loadFrenchiseeDetails() {
    this.restService.GetData(Constants.GET_FRANCHISEE_DETAILS_URL).subscribe ( frenchiseeData => {
      if (frenchiseeData.status == 200) {
        this.franchisee = frenchiseeData.body;
      }  
    });
  }

  private loadDoctorsByFranchisee() {
    this.restService.GetData(Constants.GET_ALL_DOCTORS_URL).subscribe ( doctorData => {
      if (doctorData.status == 200) {
        this.doctorDataList = new Array<Doctor>()
        doctorData.body.forEach((doctor: Doctor) => {
          this.doctorDataList.push(doctor);
        });
        this.doctorData = new Array<Doctor>();
        this.doctorData = [...this.doctorDataList];
      }  
    });
      
  }

  private loadLabsByFranchisee() {
    this.restService.GetData(Constants.GET_ALL_LABS_URL).subscribe ( labData => {
      if (labData.status == 200) {
        this.labDataList = new Array<Lab>()
        labData.body.forEach((lab: Lab) => {
          this.labDataList.push(lab);
        });
        this.labData =  new Array<Lab>();
        this.labData = [...this.labDataList];
      }  
    });
  }

  private loadAllTestTypes() {
    this.restService.GetData(Constants.GET_ALL_TEST_TYPE_URL).subscribe ( testTypeData => {
      if (testTypeData.status == 200) {
        this.testTypeDataList = new Array<TestType>();
        testTypeData.body.forEach((testType: TestType) => {
          this.testTypeDataList.push(testType);
        });
        this.testData =  new Array<TestType>();
        this.testData = [...this.testTypeDataList];
      }  
    });
  }

  public openAddDoctor(): void {
    const addDoctorRef = this.dialog.open(ModalWindowComponent, {
      panelClass: 'custom-dialog-container',
      width: '80%',
      height: '70%',
      maxWidth: '600px',
      data:{"title":"Add New Doctor","name":"Doctor's Name", "location":"Doctor's Location","details":"Doctor's Details", "addItem":"Add Doctor"}
    });

    addDoctorRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'+result);
      this.loadDoctorsByFranchisee();
      this.selected.setValue(0);
    });
  }
  public openAddLab(): void {
    const addLabRef = this.dialog.open(ModalWindowComponent, {
      panelClass: 'custom-dialog-container',
      width: '80%',
      height: '70%',
      maxWidth: '600px',
      data:{"title":"Add New Lab","name":"Lab's Name", "location":"Lab's Location","details":"Lab's Details","addItem":"Add Lab"}
    });

    addLabRef.afterClosed().subscribe(result => {
      this.loadLabsByFranchisee();
      this.selected.setValue(1);
    });
  }

  doctorTabColumn: ColDef[] = [
    { field: 'doctorName', sortable: true, filter: 'agTextColumnFilter', headerName: 'Doctor\'s Name',width: 400},
    { field: 'details' , sortable: true,filter: 'agTextColumnFilter', headerName: 'Details',width: 300},
    { field: 'address' , sortable: true,filter: 'agTextColumnFilter', headerName: 'Address', width: 300},
    { field: 'doctorLocation' , sortable: true,filter: 'agTextColumnFilter', headerName: 'Location'},
    { field: 'phone' , sortable: true,filter: 'agTextColumnFilter', headerName: 'Mobile No.'},
    { field: 'email' , sortable: true,filter: 'agTextColumnFilter', headerName: 'Email ID',width: 300},
    { field: 'action' , sortable: true,filter: 'agTextColumnFilter', headerName: 'Action'}
  ];
  labTabColumn: ColDef[] = [
    { field: 'labName', sortable: true, filter: 'agTextColumnFilter', headerName: 'Lab\'s Name',width: 400},
    { field: 'details' , sortable: true,filter: 'agTextColumnFilter', headerName: 'Details',width: 300},
    { field: 'address' , sortable: true,filter: 'agTextColumnFilter', headerName: 'Address', width: 300},
    { field: 'labLocation' , sortable: true,filter: 'agTextColumnFilter', headerName: 'Location'},
    { field: 'phone' , sortable: true,filter: 'agTextColumnFilter', headerName: 'Mobile No.'},
    { field: 'email' , sortable: true,filter: 'agTextColumnFilter', headerName: 'Email ID',width: 300},
    { field: 'action' , sortable: true,filter: 'agTextColumnFilter', headerName: 'Action'}
  ];

  testTabColumn: ColDef[] = [
    { field: 'testCode', sortable: true, filter: 'agTextColumnFilter', headerName: 'Test Code',width: 400},
    { field: 'testName', sortable: true, filter: 'agTextColumnFilter', headerName: 'Test Name',width: 400},
    { field: 'testDetails' , sortable: true,filter: 'agTextColumnFilter', headerName: 'Details',width: 400},
    { field: 'sampleTypes' , sortable: true,filter: 'agTextColumnFilter', headerName: 'Sample Types', width: 400},
    { field: 'amount', sortable: true, filter: 'agTextColumnFilter', headerName: 'Amount',width: 400}
  ];

}
