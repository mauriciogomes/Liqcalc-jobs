import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatesService } from '../shared/data-access/states.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    public router: Router,
    public statesService: StatesService
  ) { }

  ngOnInit(): void {
  }

  navigate(urlRoute: string) {
    this.router.navigateByUrl(urlRoute);
  }

  handleClickSearch() {
    const PATH_SEARCH = '/opportunities/search';
    this.navigate(PATH_SEARCH);

    this.statesService.setActivePage('search');
  }

  handleClickCreate() {
    const PATH_CREATE = '/opportunities/creation';
    this.navigate(PATH_CREATE);

    this.statesService.setActivePage('creation');
  }

  handleClickCalculator() {
    const PATH_CALCULATOR = 'calculator';
    this.navigate(PATH_CALCULATOR);

    this.statesService.setActivePage('calculator');
  }

  openLinkedin() {
    const URL = "https://www.linkedin.com/in/mauriciojgomes/";
    this.openExternalLink(URL);
  }

  openWhatsapp() {
    const URL = "https://wa.me//5548988036346?text=Olá,%20Maurício";
    this.openExternalLink(URL);
  }

  openGithub() {
    const URL = "https://github.com/mauriciogomes";
    this.openExternalLink(URL);
  }

  openExternalLink(url: string) {
    window.open(url, '_blank');
  }

}
