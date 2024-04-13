
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  isLoginMode = true;
  isLoading = false;
  error = ""
  isLoggedIn = false
  isSignUp = false

  constructor(private authService: AuthService,
              private router: Router) {}

  switchMode(){
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit(form: NgForm){
    this.isLoading = true
    const email = form.value.email
    const password = form.value.password

    if(this.isLoginMode){
      this.authService.login(email, password).subscribe(res => {
        console.log(res)
        this.error = ""
        this.isLoading = false
        this.isLoggedIn = true
        this.isSignUp = false
        this.router.navigate(['./dashboard'])
      },error => {
        console.log(error)
        this.isLoading = false
        this.error = "ERROR: "+(error.error.error.message)
      })
    }
    else{
      this.authService.signUp(email, password).subscribe(res => {
        console.log(res)
        this.isLoading = false
        this.isLoggedIn = false
        this.isSignUp = true
      },errorRes => {
        console.log(errorRes)
        this.isLoading = false
        this.error = "Error: "+(errorRes.error.error.message)
      })
    }
    form.reset()
  }

  onHandleError(){
    this.error = ""
  }

}

