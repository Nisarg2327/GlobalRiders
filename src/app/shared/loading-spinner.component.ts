import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: '<div class="loader"></div>',
  styleUrls: ['loading-spinner.css']
})

export class LoadingSpinnerComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
