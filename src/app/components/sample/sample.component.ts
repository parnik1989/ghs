import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SampleType, TestDetail, TestType } from 'src/app/types/DataType';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  testData: TestDetail = new TestDetail();
  amount?: number;
  sampleBarcode?: String;
  testDataSelected: Boolean = false;
  completed?: Boolean = true;

  sampleTypes = new Array<SampleType>();
  testTypeDataList = new Array<TestType>();

  constructor(public dialogRef: MatDialogRef<SampleComponent>,
    @Inject(MAT_DIALOG_DATA) public testTypeData: any) { }

  ngOnInit(): void {
    this.testTypeDataList = [...this.testTypeData.testType];
  }
  public onCancel(): void {
    this.dialogRef.close();
  }

  public checkBarcode(checkBarcode: String) {
    if (this.sampleBarcode != undefined && this.sampleBarcode != "") {
      this.completed = false;
    } else {
      this.completed = true;
    }
  }

  public populateSampleType(testData: any) {
    if (testData) {
      this.testDataSelected = true;
      this.amount = testData.amount;
      // Splitting sample types string into an array of string seperated by ,
      let sampleTypeList = testData.sampleTypes?.split(',');
      this.sampleTypes = new Array<SampleType>(); 
      sampleTypeList?.forEach((sample: string) => {
          let sampleType = new SampleType();
          sampleType.sampleName = sample;
          sampleType.sampleBarcode="";
          this.sampleTypes.push(sampleType);
        });
    }
  }

  public addSample(): void {
    console.log(this.sampleBarcode);
    this.sampleTypes.forEach(sample => {
      sample.sampleBarcode = this.sampleBarcode;
    });
    this.testData.sampleTypes = [...this.sampleTypes];
    this.dialogRef.close({ event: 'ADD', data: this.testData });
  }

}
