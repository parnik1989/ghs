import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Constants } from 'src/app/helper/constants';
import { RestService } from 'src/app/services/rest.service';
import { DialogData, Doctor, Lab} from 'src/app/types/DataType';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
  modalType?: String;
  title?: String;
  name?: String;
  location?: String;
  details?: String;
  addItem?: String;
  dialogData = new DialogData();
  completed = true;
  
  ngOnInit(): void {
    console.log(this.data);
    this.title = this.data.title;
    this.name = this.data.name;
    this.location = this.data.location;
    this.details = this.data.details;
    this.addItem = this.data.addItem;
    this.modalType = this.data.modalType;
  }


  constructor(
    public dialogRef: MatDialogRef<ModalWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogLabels,
    private restService: RestService) {

  }

  public checkName(event: any) {
    if (this.dialogData.name != undefined && this.dialogData.name != "") {
      this.completed = false;
    } else {
      this.completed = true;
    }
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  public addValue(): void {
    console.log("Adding" + this.dialogData);
    if (this.modalType == Constants.DOCTOR) {
      let doctor = new Doctor();
      doctor.doctorName = this.dialogData.name;
      doctor.doctorLocation = this.dialogData.location;
      doctor.address = this.dialogData.address;
      doctor.details = this.dialogData.details;
      doctor.email = this.dialogData.email;
      doctor.phone = this.dialogData.phone;
      doctor.franchiseeCode = 'BR001';
      this.restService.PostData(doctor,Constants.SAVE_NEW_DOCTOR_URL).subscribe( data => {
        console.log(data);
      })  
    } else if (this.modalType == Constants.LAB) {
      let lab = new Lab();
      lab.labName = this.dialogData.name;
      lab.labLocation = this.dialogData.location;
      lab.address = this.dialogData.address;
      lab.details = this.dialogData.details;
      lab.email = this.dialogData.email;
      lab.phone = this.dialogData.phone; 
      lab.franchiseeCode = 'BR001';
      this.restService.PostData(lab,Constants.SAVE_NEW_LAB_URL).subscribe( data => {
        console.log(data);
      })
    }
    this.dialogRef.close({ event: 'Add', data: this.dialogData });
  }

}

export interface DialogLabels {
  modalType: string;
  title: string;
  name: string;
  location: string;
  details: string;
  addItem: string;
}


