import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isMobileMenuOpen: boolean = false;

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }
  
  handleClickMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
  }
  
  navigate(urlRoute: string) {
    this.router.navigateByUrl(urlRoute);
  }

  handleMobileClickSearch() {
    this.closeMenu();

    const PATH_SEARCH = '/opportunities/search';
    this.navigate(PATH_SEARCH);
  }

  handleMobileClickCreate() {
    this.closeMenu();

    const PATH_CREATE = '/opportunities/search';
    this.navigate(PATH_CREATE);
  }

  handleMobileClickCalculator() {
    this.closeMenu();

    const PATH_CALCULATOR = 'calculator';
    this.navigate(PATH_CALCULATOR);
  }

  handleClickLogo() {
    this.closeMenu();

    const PATH_ROOT = '/';
    this.navigate(PATH_ROOT);
  }
  
}
