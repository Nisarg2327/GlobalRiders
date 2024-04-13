import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  apiResponse = new EventEmitter<{isSuccess: boolean, message: string}>;
  rememberMeChecked = new EventEmitter<boolean>;
  requestParams = new EventEmitter<{firstName: string, lastName: string, email: string, password: string}>();
}