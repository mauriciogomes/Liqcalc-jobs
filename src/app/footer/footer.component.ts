import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  navigate(urlRoute: string) {
    this.router.navigateByUrl(urlRoute);
  }

  handleClickSearch() {
    const PATH_SEARCH = '/opportunities/search';
    this.navigate(PATH_SEARCH);
  }

  handleClickCreate() {
    const PATH_CREATE = '/opportunities/search';
    this.navigate(PATH_CREATE);
  }

  handleClickCalculator() {
    const PATH_CALCULATOR = 'calculator';
    this.navigate(PATH_CALCULATOR);
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
