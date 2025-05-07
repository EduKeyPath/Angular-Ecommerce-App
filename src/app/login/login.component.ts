import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError:boolean = false;
  loginSuccess:boolean = false;
  invalidEmail:boolean = false;
  invalidPass:boolean = false;

  loginForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl('')
  });
  
  constructor( private loginService:LoginService, private router:Router ) { }

  ngOnInit(): void {
  }

  userLogin(){
    try{
      this.loginService.userLogin().subscribe(item => {
        let resData:any = item;
        let userData = resData.data.user[0];

        if(userData.loginId !== this.loginForm.value.username){
          this.invalidEmail = true;
          this.invalidPass = false;
        }
        if(userData.password !== this.loginForm.value.password){
          this.invalidEmail = false;
          this.invalidPass = true;
        }
        if(userData.loginId !== this.loginForm.value.username && userData.password !== this.loginForm.value.password){
          this.invalidEmail = true;
          this.invalidPass = true;
        }
        if(userData.loginId === this.loginForm.value.username && userData.password === this.loginForm.value.password){
          this.loginSuccess = true;
          this.invalidEmail = false;
          this.invalidPass = false;
          setTimeout(() => {
            this.router.navigate(['/products'])
          },1000)
        }
      })
    }
    catch(err){
      console.log(err)
    }
  }

}
