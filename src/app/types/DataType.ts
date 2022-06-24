  export class DialogData {
    id?: string;
    frenchiseId?: string;
    name?: string;
    details?: string;
    location?: string;
    address?: string;
    phone?: string;
    email?: string;
  }

  export class Franchisee {
    public id?: number;
    public name?: string;
    public category?: string;
    public location?: string;
    public address?: string;
    public phone?: string;
    public email?: string;
    public details?: string;
    public franchiseeCode?: string;
  }
  
  export class Lab{
    public address?: string;
    public details?:string;
    public email?: string;
    public franchiseeCode?: string;
    public id?:  number;
    public labLocation?: string;
    public labName?: string;
    public phone?: string
  }

  export class Doctor{
    public address?: string;
    public details?:string;
    public email?: string;
    public franchiseeCode?: string;
    public id?:  number;
    public doctorLocation?: string;
    public doctorName?: string;
    public phone?: string
  }

  export class TestType{
    id?: number;
	  testCode?: string;
    testName?: string;
    sampleTypes?: string;
    amount?: number;
    testDetails?: string;
  }

  export class Order {
    public orderId?: number
    public patientName?: String;
    public patientGender?: String;
    public patientAge?: Number;
    public patientPhone?: Number;
    public doctorName?: String;
    public labName?: String;
    public testDetails?: TestDetail[];
  }
  
  export class TestDetail {
    public testId?: string;
    public testCode?: string;
    public testName?: String;
    public sampleTypes?: SampleType[];
    public amount?: number;
  }

  export class SampleType {
    sampleName?: String;
    sampleBarcode?: String;
  }


  export class ResponseData {
    successData: any;
    errorData: any;
  }