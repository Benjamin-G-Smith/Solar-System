import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {  
  @Input() rotation!: string;  

  constructor() {

   }

  ngOnInit(): void {
  }

}
