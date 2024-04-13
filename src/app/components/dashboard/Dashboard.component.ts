import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Dashboard } from '../../core/model/dashboard.model';
import { AuthService } from 'src/app/auth/auth.service';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('typeWriterAnimation', [
      transition(':enter', [
        animate('1s', keyframes([
          style({ opacity: 0, transform: 'translateY(100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {
  products: Dashboard[] | any;

  responsiveOptions: any[] | undefined;

  constructor(private dashboardService: DashboardService,
    private authService: AuthService) { }

  ngOnInit() {
    this.dashboardService.getProductsSmall().then((products) => {
      this.products = products;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  performLogout() {
    this.authService.logout();
  }
}