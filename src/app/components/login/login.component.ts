import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { ApiService } from '../../services/api';
import { User } from "../../models/user.model";
import { Observable } from 'rxjs';
import { FormsService } from "./../../services/form-service";
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public  loginForm: FormGroup;
public userLoggedIn: boolean = false;
public userNotAuth: boolean = false;
public currentUser: Array<User>;
public token: String = "";
usersObservable: Observable<User[]>;
public users: Array<any> = [];
  public imageLoader:boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router,private httpClient: HttpClient,public formService:FormsService,private userAuthService: ApiService,private _ngToastService: ToastrService,) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
    
 
$( document ).on( 'keydown', function ( e ) {
    if ( e.keyCode === 13 ) { // ESC
          $(".modal,.backdrop").css("display", "none");
    }
});
    
  }


  public loginFun(len, arr) {
    console.log("kjhkjhk")
    this.userAuthService.authenticateUser(this.loginForm.controls["email"].value, this.loginForm.controls["password"].value);
    setTimeout(() => {
      this.currentUser = this.userAuthService.currentUser;
      console.log(this.currentUser[0]);
      if (this.currentUser.length > 0 && (this.currentUser[0].email == this.loginForm.controls["email"].value && this.currentUser[0].password == this.loginForm.controls["password"].value)) {
        console.log("OK");
        for (var i = len; i > 0; i--) {
          this.token +=
            arr[Math.floor(Math.random() * arr.length)];
        }
        console.log(this.token);
        localStorage.setItem('token', JSON.stringify({ token: this.token }));
        localStorage.setItem('currentUserEmail', JSON.stringify({ email: this.loginForm.controls["email"].value }));
        this.httpClient.get("http://localhost:3000/users").subscribe(e => console.log(e))
        this.userLoggedIn = localStorage.getItem("token") && JSON.parse(localStorage.getItem("token")).token ? true : false;
        console.log(this.userAuthService.currentUserProfile)
        this._ngToastService.success('Login Successfull !');
        this.router.navigate(["pages/home"]);
        console.log(this.userAuthService.currentUserProfile)
      }
      else {
        this._ngToastService.error('Please enter correct username and password!');
        // alert("Please enter correct username and password");
      }
    }, 1000);

  }
 

  hidePop()
  {
    $(".modal,.backdrop").css("display", "none");
  }

  public showPass() {
    var x = (<HTMLInputElement>document.getElementById("password"));
    // let x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


}
