import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CaseWorkerListService {
  private  getCaseWorkerListURl="http://rw80:900/api/CaseWorker/Get_CaseWorkerList"
  constructor( private  http: HttpClient) { }

    postPatient(
        nationalcode : string,
        patinetID:string,
        startDate:string

    ) {
        const data = {
            "caseWorkerID": "",
            "nationalcode": nationalcode,
            "patientID": patinetID,
            "fromDate": "",
            "toDate": "",
            "statusIS": "",
            "fromStartDate": startDate,
            "toStartDate": ""

        };

        const body = JSON.stringify(data );
        console.log(body);
        const headers = {  'Content-Type': 'application/json' };
        const headerDict = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer  ' + localStorage.getItem('token')
        }

        const requestOptions = {
            headers: new Headers(headerDict),
        };

        return   this.http.post<any>(this.getCaseWorkerListURl, body, {
            headers: headerDict
        });
    }
    getPatientByID(
        caseWorkerID : string,
        // nationalcode : string, patientID:string, fromDate:string,toDate:string,statusIS:string,
        // fromStartDate:string,toStartDate:string,
    ) {
        const data = {
            "caseWorkerID": caseWorkerID,
            "nationalcode": "",
            "patientID": "",
            "fromDate": "",
            "toDate": "",
            "statusIS": "",
            "fromStartDate": "",
            "toStartDate": ""

        };

        const body = JSON.stringify(data );
        console.log(body);
        const headers = {  'Content-Type': 'application/json' };
        const headerDict = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer  ' + localStorage.getItem('token')
        }

        const requestOptions = {
            headers: new Headers(headerDict),
        };

        return   this.http.post<any>(this.getCaseWorkerListURl, body, {
            headers: headerDict
        });
    }



}
