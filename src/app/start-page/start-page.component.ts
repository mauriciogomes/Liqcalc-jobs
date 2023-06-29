import { Component, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css', './custom-material.scss']
})
export class StartPageComponent implements OnInit {

  @ViewChild('imageHexagon') hexagon;
  initialHexagonTop: number;

  constructor(public renderer: Renderer2) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', []) onScroll() {
    this.rotatePolygon();
  }

  rotatePolygon() {
    const elementTop = this.hexagon.nativeElement.getBoundingClientRect().top;

    if( !this.initialHexagonTop ) {
      this.initialHexagonTop = elementTop;
    }

    let delta = this.initialHexagonTop - elementTop;
    let degrees = delta * (0.5);
    this.renderer.setStyle(this.hexagon.nativeElement, 'transform', `rotate(${degrees}deg)`);
  }
}
