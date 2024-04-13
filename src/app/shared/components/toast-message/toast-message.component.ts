import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.css']
})
export class ToastMessageComponent implements OnInit {
  @Input() toastId: string = "";
  @Input() errorMessage: string = "";

  constructor() { }

  ngOnInit() {
    
  }

}
