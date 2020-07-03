import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ApiService } from '../../services/api';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myForm: FormGroup;
  currentUserProfile: any = {};
  skilldetail: FormArray;
  submitted = false;
  public empIndex: any;
  public employees: Array<any> = [];
  public byname: String = "";
  public byemail: String = "";
  public isEditMode: boolean = false;
  constructor(private formBuilder: FormBuilder, public apiService: ApiService) {

  }

  ngOnInit() {
    setTimeout(() => {

    }, 1000);
     console.log(this.apiService.currentUserProfile)
    this.employees = JSON.parse(localStorage.getItem("employees")) ? JSON.parse(localStorage.getItem("employees")) : [];
    
  }

 

}
