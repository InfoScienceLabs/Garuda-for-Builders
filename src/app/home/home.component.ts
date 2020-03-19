import { Component, OnInit,ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../core/auth.service";
import { AuthenticationService } from '../auth/authentication.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //currentYear: any;
  
  isOpen: boolean = false;
  public links = new Array<{ url: string, title: string, tooltip: string, icon?: string, badge?: number, class: string }>();

  ngOnInit() {
    this.links.push(
      { url: './marketplace', title: 'MarketPlace', tooltip: '', icon: '', class: '' },
      { url: './login', title: 'Login', tooltip: '', icon: '', class: '' },
      { url: './', title: 'Signup', tooltip: '', icon: '', class: '' },
      { url: './', title: 'List Property', tooltip: '', icon: '', class: '' },
      { url: './', title: 'Transaction', tooltip: '', icon: '', class: '' }
    )

  }
  showLoading: boolean;
  constructor(
    private _elementRef: ElementRef,
    private router: Router,
    private auth: AuthService,
    private authService: AuthenticationService,

  ) {
    //this.currentYear =  new Date().getFullYear();

  }

  @HostListener("document:click", ["$event", "$event.target"])
  onClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
      return;
    }
    const clickedInside = this._elementRef.nativeElement.contains(
      targetElement
    );
    if (!clickedInside) {
      this.isOpen = false;
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  profile() {
    this.router.navigate(["/profile"]);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}
