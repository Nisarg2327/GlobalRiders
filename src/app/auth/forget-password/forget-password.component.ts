import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  submitted = false;
  forgetPasswordForm!: FormGroup;

  emailValue: string = "";
  errorMessage = "";
  isSuccessResponse = false;
  isFailResponse = false;
  isLoading = false;

  constructor(private formBuilder: FormBuilder) {

    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
    // this.forgotPasswordService.apiResponse.subscribe(
    //   (response) => {
    //     if (response.isSuccess) {
    //       this.isSuccessResponse = true;
    //       this.isFailResponse = false;
    //       this.errorMessage = "";
    //     } else {
    //       this.isSuccessResponse = false;
    //       this.isFailResponse = true;
    //       this.errorMessage = response.message;
    //     }

    //   },
    // );
  }

  onSubmit() {
    if (this.forgetPasswordForm.valid) {
      this.submitted = true
      this.isSuccessResponse = true;

    }
    else {
      this.findInvalidControls();
    }
  }

  public findInvalidControls() {
    this.forgetPasswordForm.markAllAsTouched();

  }

}