// login.component.ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import {AuthService} from 'src/app/_services/auth.service';

// C:\Users\vishal\Vishal-crud-app\src\app\_services\auth.service.ts

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  submitted :any
  service: any;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.logout();
  }

  login() {
    this.model.action = 'login';
    this.authService.loginForm(this.model).subscribe(response => {
      if (response.status === 'success') {
        this.authService.setUser(response);
      }
    }, error => {
      console.error(error);
    });
  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm);
    console.log(ngForm.invalid);
    if (ngForm.invalid) {
      return;
    }
    this.service.saveUser(ngForm.value).subscribe(response =>
      console.log('HTTP response', response)
    )



  }



  

}
