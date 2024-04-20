import { Component, OnInit, HostListener, Renderer2, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;

  isLoggedIn: boolean = false;
  private userSub!: Subscription;
  private currentRoute: string = '';
  isScrolled = false;

  constructor(
    private authService: AuthService,
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.authService.hasLogIn.subscribe((response) => {
      if (response == true) {
        this.isLoggedIn = true;
      }
      else {
        this.isLoggedIn = false;
      }
    })
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    this.isLoggedIn = isLoggedIn === 'true' ? true : false;
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.currentRoute = this.activatedRoute.firstChild?.snapshot.routeConfig?.path || '';
      this.updateNavbarScroll();
    });
  }

  updateNavbarScroll() {
    this.isScrolled = this.currentRoute === 'home' || this.currentRoute === 'explore' || this.currentRoute === 'chat' || this.currentRoute === 'profile' || window.scrollY > 56;
    if (this.isScrolled) {
      this.renderer.addClass(this.el.nativeElement.querySelector('.navbar'), 'navbar-scrolled');
    } else {
      this.renderer.removeClass(this.el.nativeElement.querySelector('.navbar'), 'navbar-scrolled');
    }
  }

  // Listen to window scroll event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateNavbarScroll();
  }

  closeDropdown() {
    const dropdownMenuElement = this.dropdownMenu.nativeElement;
    dropdownMenuElement.classList.remove('show'); // Remove the 'show' class to close the dropdown
  }

  performLogout() {
    this.authService.logout();
    localStorage.setItem('isLoggedIn', 'false');
    this.isLoggedIn = false;
  }

  ngOnDestroy(): void {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }
}
