import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  userProfileUpdated: Subject<any> = new Subject<any>();
  showLoader: Subject<boolean> = new Subject<boolean>();
  activateMenu: Subject<string> = new Subject<string>();
  
  constructor(
    // private authService: AuthService
  ) {}

  getNavigationRoute(routeName: string) {
    return '/' + routeName;
  }

  validatePasswordStrenth(
    password: string
  ): [boolean, boolean, boolean, boolean, boolean] {
    let isValidForUppercase = /[A-Z]/.test(password);
    let isValidForLowercase = /[a-z]/.test(password);
    let isValidForNumber = /\d/.test(password);
    let isValidForSymbol = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(
      password
    );
    let isValidForMinimumLength = password.length >= 8 ? true : false;
    return [
      isValidForUppercase,
      isValidForLowercase,
      isValidForNumber,
      isValidForSymbol,
      isValidForMinimumLength,
    ];
  }

}