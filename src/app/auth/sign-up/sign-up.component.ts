// ts

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from 'src/app/shared/utility.service';
import { Component, Input } from '@angular/core';
import { ROUTE } from 'src/app/core/constant/route.constant';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  submitted = false;
  signUpForm: FormGroup;
  isSuccessResponse = false;
  isFailResponse = false;
  isLoading = false;
  showErrorMessage: boolean = false;

  firstNameValue: string = "";
  lastNameValue: string = "";
  emailValue: string = "";
  passwordValue: string = "";
  termsChecked: boolean = false;
  tAndCRouterLink: string = "";

  validForUpperCase = false;
  validForLowerCase = false;
  validForNumber = false;
  validForSymbol = false;
  validForMinimumLength = false;

  showPassword: boolean = false;
  errorMessage = "";

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private utilityService: UtilityService,
    private router: Router,
  ) {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(.{,}|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,})$/)]],
      term: [false, Validators.requiredTrue]
    });
    // this.tAndCRouterLink = this.utilityService.getNavigationRoute(ROUTE.TERMS_AND_CONDITION);
  }

  togglePasswordTextType() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    this.submitted = true;
    const email = this.signUpForm.value.email
    const password = this.signUpForm.value.password
    if (this.signUpForm.valid) {
      this.isLoading = true;
      this.authService.signUp(email, password).subscribe(res => {
        console.log(res)
        this.isLoading = false
        this.isSuccessResponse = true;
        this.isFailResponse = false;
      },errorRes => {
        console.log(errorRes)
        this.isLoading = false
        this.showErrorMessage = true
        this.errorMessage = "Error: "+(errorRes.error.error.message)
      })    
    }
   else{
    this.findInvalidControls();
   } 
  }

  public findInvalidControls() {
    this.signUpForm.markAllAsTouched();

}

  onTermsConditionClick() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree([ROUTE.TERMS_AND_CONDITION])
    );
    window.open(url, '_blank');
  }
}
