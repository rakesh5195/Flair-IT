import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userLoggedIn: boolean = false;
  public token: String = "";
  constructor(private router: Router,) { }

  ngOnInit(): void {
    this.userLoggedIn = localStorage.getItem("token") && JSON.parse(localStorage.getItem("token")).token ? true : false;
  }

  public logout() {
    console.log("sacasca");
    
    localStorage.removeItem("token");
    this.userLoggedIn = localStorage.getItem("token") && JSON.parse(localStorage.getItem("token")).token ? true : false;
    this.router.navigate(["/login"]);
  }

}
