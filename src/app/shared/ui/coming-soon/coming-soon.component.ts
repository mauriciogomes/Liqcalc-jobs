import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
