import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CaseWorkerListService} from "./../../services/Case-worker/Case-woeker-patientList/case-worker-list.service";
import { EnumServiesService} from "./../../services/Case-worker/Enum/enum-servies.service"
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
    patientList:any[];
    StatueList:any[];
    caseWorkerId:any;
    nationalCode="";
    filterForm: FormGroup;
    patientID="";
    startDate=""
  constructor(private modalService: NgbModal,
              private _service:CaseWorkerListService,
              private _Enum:EnumServiesService,
              private router: Router) { }
    GetDetails(content ) {
        this.modalService.open(content, { size: 'lg' ,backdrop:'static',keyboard  : false}).result.then((result) => {
        }, (reason) => {
        });


    }
    getId(id){
      this.caseWorkerId=id;
        localStorage.setItem('caseWorkerId',id);
        this.router.navigate(['/Help/Patient-Info', this.caseWorkerId]);
    }
    onSubmit(){
      console.log(this.filterForm.value);
      this.nationalCode=this.filterForm.value.nationalCode;
      this.patientID=this.filterForm.value.patinetID;
      this.startDate=this.filterForm.value.startDate
      this._service.postPatient(this.nationalCode,this.patientID, this.startDate).subscribe(res=>{
          this.patientList=res;
      })
    }

  ngOnInit() {
      this._service.postPatient(this.nationalCode,this.patientID, this.startDate).subscribe(res=>{
          this.patientList=res;
      })
      this._Enum.GetCaseWorkerStatusList().subscribe(res=>
          this.StatueList=res)
        this.filterForm = new FormGroup({
            'nationalCode':new FormControl(''),
            'patinetID':new FormControl(''),
            'startDate':new FormControl('')
      });


  }

}
