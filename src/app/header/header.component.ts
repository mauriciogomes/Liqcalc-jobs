import { Component, HostListener, OnInit } from '@angular/core';
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

  isCastShadow: boolean = false;

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
    const PATH_CREATION = '/opportunities/creation';
    this.navigate(PATH_CREATION);

    this.statesService.setActivePage('creation');
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
  
  @HostListener('window:scroll', []) onScroll() {
    if(window.scrollY > 0) {
      this.isCastShadow = true;
    } else {
      this.isCastShadow = false;
    }
  }
}
