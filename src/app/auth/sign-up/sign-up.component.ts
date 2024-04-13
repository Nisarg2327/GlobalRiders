import { UtilityService } from 'src/app/shared/utility.service';
import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ROUTE } from 'src/app/core/constant/route.constant';
import { Router } from '@angular/router';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent{
  // @ViewChild('form') form : NgForm;
  isSuccessResponse = false;
  isFailResponse = false;

  @Input() firstNameValue: string = "";
  @Input() lastNameValue: string = "";
  @Input() emailValue: string = "";
  passwordValue: string = "";
  termsChecked: boolean = false;
  tAndCRouterLink: string = "";

  validForUpperCase = false;
  validForLowerCase = false;
  validForNumber = false;
  validForSymbol = false;
  validForMinimumLength = false;

  showPassword: boolean = false;
  errorMessage = ""

  constructor(
    // private signupService: SignUpService,
     private utilityService: UtilityService,
     private router: Router,
    ) {
    // this.signupService.apiResponse.subscribe({
    //   next: (response) => {
    //     if(response.isSuccess) {
    //       this.isSuccessResponse = true;
    //       this.isFailResponse = false;
    //       this.errorMessage = "";
    //     } else {
    //       this.isSuccessResponse = false;
    //       this.isFailResponse = true;
    //       this.errorMessage = response.message;
    //     }
    //   },
    // });
    // this.tAndCRouterLink = this.utilityService.getNavigationRoute(ROUTE.TERMS_AND_CONDITION);
  }

  togglePasswordTextType() {
    this.showPassword = !this.showPassword;
  }

  // onKeyupOfPassword(x) {
  //   [this.validForUpperCase, this.validForLowerCase, this.validForNumber, this.validForSymbol, this.validForMinimumLength] = this.utilityService.validatePasswordStrenth(x.target.value)
  // }

  onSubmit() {
  //    if (this.form.valid) {
  //     this.isSuccessResponse = true;
  //     this.isFailResponse = false;
  //    }

  }

  onTermsConditionClick() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree([ROUTE.TERMS_AND_CONDITION])
    );
    window.open(url, '_blank');
  }
}
