import { Injectable } from '@angular/core'; 


@Injectable() 
export class Constants {
    public readonly API_ENDPOINT: string = ' https://www.userdomain.com/'; 
    public readonly API_MOCK_ENDPOINT: string = 'https://www.userdomainmock.com/'; 
    public static dashboardTitle: string = " Welcome to Go-Labz"; 
    public static GET_ALL_LABS_URL = '/getAllLabs';
    public static GET_ALL_DOCTORS_URL = '/getAllDoctors';
    public static GET_ALL_TEST_TYPE_URL = '/getAllTestTypes';
    public static GET_FRANCHISEE_DETAILS_URL = '/getFranchiseeDetail';
    public static SAVE_NEW_DOCTOR_URL = '/saveNewDoctor';
    public static SAVE_NEW_LAB_URL = '/saveNewLab';
    public static DOCTOR = 'DOCTOR';
    public static LAB = 'LAB';
    } 