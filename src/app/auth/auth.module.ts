import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ROUTE } from '../core/constant/route.constant';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from '../shared/loading-spinner.component';
import { AppInfoComponent } from '../shared/components/app-info/app-info.component';

const routes = [
    { path: ROUTE.LOGIN, component: LoginComponent, title: 'Login' },
    { path: ROUTE.FORGOT_PASSWORD, component: ForgetPasswordComponent, title: 'Forgot Password' },
    { path: ROUTE.SIGN_UP, component: SignUpComponent, title: 'Sign Up' }
];

@NgModule({
    declarations: [
        LoginComponent,
        ForgetPasswordComponent,
        SignUpComponent,
        LoadingSpinnerComponent,
        AppInfoComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        LoginComponent,
        LoadingSpinnerComponent,
        AppInfoComponent
    ]
})
export class AuthModule { }
