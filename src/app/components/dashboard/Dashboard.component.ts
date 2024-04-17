import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Dashboard } from '../../core/model/dashboard.model';
import { AuthService } from 'src/app/auth/auth.service';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';
import Typewriter from 'typewriter-effect';


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

    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 75,
    });

    typewriter
      .pauseFor(2500)
      .typeString('A simple yet powerful native javascript')
      .pauseFor(300)
      .deleteChars(10)
      .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
      .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
      .pauseFor(1000)
      .start();
  }

  performLogout() {
    this.authService.logout();
  }
}