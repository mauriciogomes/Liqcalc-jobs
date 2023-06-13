import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

// Services
import { StatesService } from '../shared/data-access/states.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isMobileMenuOpen: boolean = false;
  activePage$: Observable<string>;

  constructor(
    public router: Router,
    public statesService: StatesService
  ) {
    this.activePage$ = this.statesService.getActivePage();
  }

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
    this.handleClickSearch();
  }

  handleMobileClickCreate() {
    this.closeMenu();
    this.handleClickCreate();
  }

  handleMobileClickCalculator() {
    this.closeMenu();
    this.handleClickCalculator();
  }

  handleClickSearch() {
    const PATH_SEARCH = '/opportunities/search';
    this.navigate(PATH_SEARCH);

    this.statesService.setActivePage('search');
  }

  handleClickCreate() {
    const PATH_CREATE = '/opportunities/search';
    this.navigate(PATH_CREATE);

    this.statesService.setActivePage('create');
  }

  handleClickCalculator() {
    const PATH_CALCULATOR = 'calculator';
    this.navigate(PATH_CALCULATOR);

    this.statesService.setActivePage('calculator');
  }

  handleClickLogo() {
    this.closeMenu();

    const PATH_ROOT = '/';
    this.navigate(PATH_ROOT);

    this.statesService.clearActivePage();
  }
  
}
