import { Component} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ROUTE } from 'src/app/core/constant/route.constant';
import { AuthService } from '../auth.service';
import { UtilityService } from 'src/app/shared/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  submitted = false;
  logInForm: FormGroup;

  isLoginMode = true;
  isLoading = false;
  isLoggedIn = false
  isSignUp = false
  showErrorMessage: boolean = false;

  emailValue: string = "";
  passwordValue: string = "";
  isLoginSuccessfully: boolean = false;
  showPassword: boolean = false;
  errorMessage: string = "";
  forgotPasswordNavigationUrl = "";
  signUpNavigationUrl = "";
  rememberMeCheckboxValue: boolean = false;

  
  validForUpperCase = false;
  validForLowerCase = false;
  validForNumber = false;
  validForSymbol = false;
  validForMinimumLength = false;

  constructor(
    private authService: AuthService,
    private utilityService: UtilityService,
    private router: Router,
    private formBuilder: FormBuilder) {
    // this.errorMessage = this.utilityService.getLocale(Locale.SOMETHING_WENT_WRONG);

    this.logInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(.{,}|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,})$/)]]
    });
    // this.emailValue = this.authService.getRememberedEmail() ?? "";
    this.rememberMeCheckboxValue = this.emailValue.length > 0;
    // this.loginService.rememberMeChecked.next(this.rememberMeCheckboxValue);

    this.forgotPasswordNavigationUrl = this.utilityService.getNavigationRoute(ROUTE.FORGOT_PASSWORD);
    this.signUpNavigationUrl = this.utilityService.getNavigationRoute(ROUTE.SIGN_UP);
    // this.loginService.apiResponse.subscribe((isSuccess: boolean) => {
    //   this.isLoginSuccessfully = isSuccess;
    // });

  }

  onRememberMeCheckChanged(event: any) {
    // this.loginService.rememberMeChecked.next(event.target.checked);
  }

  togglePasswordTextType() {
    this.showPassword = !this.showPassword;
  }

  onSubmit(logInForm: FormGroup){
    if(this.logInForm.valid){
    this.isLoading = true
    const email = logInForm.value.email
    const password = logInForm.value.password

    if(this.isLoginMode){
      this.authService.login(email, password).subscribe(res => {
        console.log(res)
        this.errorMessage = ""
        this.isLoading = false
        this.isLoggedIn = true
        this.isSignUp = false
        this.router.navigate(['./dashboard'])
      },error => {
        console.log(error)
        this.isLoading = false
        this.showErrorMessage = true
        this.errorMessage = "ERROR: "+(error.error.error.message)
      })
    }
    // logInForm.reset()
  }
  else{
    this.findInvalidControls();
   } 
  }

  public findInvalidControls() {
    this.logInForm.markAllAsTouched();

}

  onHandleError(){
    this.errorMessage = ""
  }
}