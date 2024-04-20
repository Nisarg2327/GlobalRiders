import {Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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
    trigger('typewriter', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s', keyframes([
          style({ opacity: 0, offset: 0 }),
          style({ opacity: 1, offset: 1 })
        ]))
      ])
    ])
  ]
})

export class DashboardComponent implements OnInit {
  @ViewChild('typewriterText') typewriterText!: ElementRef;
  @ViewChild('backgroundVideo', { static: true }) backgroundVideo!: ElementRef;

  products: Dashboard[] | any;
  responsiveOptions: any[] | undefined;

  constructor(
    private dashboardService: DashboardService,
    private authService: AuthService,
    private renderer: Renderer2
  ) { }

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

    const target = this.typewriterText.nativeElement;
    const writer = new Typewriter(target, {
      loop: true,
    });

    writer.type('By Riders.').start();

    // Check if the video has been played before
    const videoPlayedBefore = localStorage.getItem('videoPlayedBefore');

    // If the video has not been played before, play it
    if (!videoPlayedBefore) {
      const videoElement = this.backgroundVideo.nativeElement;
      videoElement.play();

      // Set flag in local storage to indicate that the video has been played

    }
  }

  performLogout() {
    this.authService.logout();
  }
}