import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  darkenScreen: boolean = false;
  showNavbar: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Detect the scroll position
    if(window.scrollY > 100){
      this.showNavbar = true;
    }
    else{
      this.showNavbar = false
    }
  }

  performLogout() {
    this.authService.logout();
  }
}