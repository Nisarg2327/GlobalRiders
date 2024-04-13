import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ROUTE } from '../core/constant/route.constant';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from '../shared/loading-spinner.component';
const routes: Routes = [
    {
        path: ROUTE.LOGIN,
        component: LoginComponent,
        title: 'Login',
    },
    //   {
    //     path: ROUTE.LOGOUT,
    //     component: LogoutComponent,
    //     title: 'Logout',
    //   },
    {
        path: ROUTE.FORGOT_PASSWORD,
        component: ForgetPasswordComponent,
        title: 'Forgot Password',
    },
    //   {
    //     path: ROUTE.TWO_FACTOR_AUTHENTICATION,
    //     component: TwoFactorVerifationComponent,
    //     title: 'Two Factor Verification',
    //   },
    //   {
    //     path: 'reset-password/:token',
    //     component: ResetPasswordComponent,
    //     title: 'Reset Password',
    //   },
    {
        path: ROUTE.SIGN_UP,
        component: SignUpComponent,
        title: 'Sign Up',
    },
];

@NgModule({
    declarations: [
        LoginComponent,
        ForgetPasswordComponent,
        SignUpComponent,
        LoadingSpinnerComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        FormsModule
    ],
    exports: [
        LoadingSpinnerComponent,
        // AppInfoComponent,
        // ToastMessageComponent,
        // FormateSettingsComponent,
        // CompanySettingComponent,
        // SelectFileComponent,
        // ChangePasswordComponent,
        // PersonalInfoComponent,
        // ValidateResultComponent,
    ],
})
export class AuthModule { }
