import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from "@angular/router";
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  sendEmail: FormGroup;
  submitted = false;
  condition:string
  message:string
  display2='none';
  display1='none';
  sendMessage:any;
  status:any;
  user_type:any;
  imageLoader:boolean = false;
  
  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.sendEmail = this.formBuilder.group({
      email_id: ['', [Validators.required]],
    })

  }

  // async onSubmit() {
      
  //   try {
  //     let data = await this.apiService.post("forget-password", this.sendEmail.value)
  //     console.log(data);
  //     this.imageLoader = false;   
  //     this.status = data.success   
  //     if(this.status == true){
  //       this.sendMessage = data.response
  //       this.display1="block";
  //     }
  //     else{
  //       this.sendMessage = data.error
  //       this.display1="block";
  //       location.reload();
  //     }
   
    

  //   } catch (error) {
  //     console.log(error);
  //     this.sendMessage = error.error
  //     this.sendMessage = "Email Went Wrong"
  //     this.imageLoader = false;
  //       this.display2="block";
  //   }   
   
  //     }


  public hidePop(){
    this.display1="none";
      }
     

}
