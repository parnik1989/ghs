import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Doctor, Lab, Order, TestDetail, TestType } from 'src/app/types/DataType';
import { ModalWindowComponent } from '../modal-window/modal-window.component';
import { SampleComponent } from '../sample/sample.component';
@Component({
  selector: 'app-orderbooking',
  templateUrl: './orderbooking.component.html',
  styleUrls: ['./orderbooking.component.scss']
})
export class OrderbookingComponent implements OnInit {
  completed = true;
  totalAmount: number = 0;
  order = new Order();
  testDetailsList = new Array<TestDetail>();
  testTypeDetailsList = new Array<TestType>();
  labDetailList = new Array<Lab>();
  doctorDetailList = new Array<Doctor>();

  constructor(public orderDialogueRef: MatDialogRef<OrderbookingComponent>,
              @Inject(MAT_DIALOG_DATA) public orderData: any,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.labDetailList = [...this.orderData.lab];
    this.doctorDetailList = [...this.orderData.doctor];
    this.testTypeDetailsList = [...this.orderData.testType]
  }

  public validateInputs() {
    if ( this.order?.patientName == undefined || this.order?.patientName == null) {
      this.completed = true;
    } else if ( this.order?.patientAge == undefined ||  this.order?.patientAge == null) {
      this.completed = true;
    } else if ( this.order?.patientGender == undefined ||  this.order?.patientGender == null) {
      this.completed = true;
    } else if ( this.order?.patientPhone == undefined ||  this.order?.patientPhone == null) {
      this.completed = true;
    } else if ( this.order?.doctorName == undefined ||  this.order?.doctorName == null) {
      this.completed = true;
    } else if ( this.order?.labName == undefined ||  this.order?.labName == null) {
      this.completed = true;
    } else if ( this.testDetailsList.length ==0 ) {
      this.completed = true;
    } else {
      this.completed = false;
    } 
  }
  public submitOrder(): void {
    this.orderDialogueRef.close();
    console.log(this.order);
  }

  public onCancel(): void {
    this.orderDialogueRef.close();
  }

  public deleteRow(index: number) {   
    let amount: any = this.testDetailsList[index].amount;
    this.totalAmount  = this.totalAmount -  amount;
    this.testDetailsList.splice(index,1);  
    this.validateInputs();
  }

  public openAddSample() {
    const addSampleRef = this.dialog.open(SampleComponent, {
      panelClass: 'custom-dialog-container',
      width: '80%',
      height: '80%',
      maxWidth: '600px',
      data:{"testType":this.testTypeDetailsList}
    });

    addSampleRef.afterClosed().subscribe(result => {
      if (result.event =='ADD') {
        this.totalAmount += result.data.amount;
        this.testDetailsList.push(result.data);
        this.order.testDetails = this.testDetailsList;
        this.validateInputs();
      }
    });
  }

  public openAddDoctor(): void {
    const addDoctorRef = this.dialog.open(ModalWindowComponent, {
      panelClass: 'custom-dialog-container',
      width: '80%',
      height: '70%',
      maxWidth: '600px',
      data:{"title":"Add New Doctor","name":"Doctor's Name", "location":"Doctor's Location","details":"Doctor's Details", "addItem":"Add Doctor","modalType":"DOCTOR"}
    });

    addDoctorRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'+result.data);
    });
  }
  public openAddLab(): void {
    const addLabRef = this.dialog.open(ModalWindowComponent, {
      panelClass: 'custom-dialog-container',
      width: '80%',
      height: '70%',
      maxWidth: '600px',
      data:{"title":"Add New Lab","name":"Lab's Name", "location":"Lab's Location","details":"Lab's Details","addItem":"Add Lab","modalType":"LAB"}
    });

    addLabRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'+result.data);
    });
  }

}

