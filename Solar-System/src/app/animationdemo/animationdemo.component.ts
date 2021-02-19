import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit,  } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-animationdemo',
  templateUrl: './animationdemo.component.html',
  styleUrls: ['./animationdemo.component.css'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        backgroundColor: 'green',
        width: '100px',
        height: '100px'
      })),
      state('final', style({
        backgroundColor: 'red',
        width: '200px',
        height: '200px'
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
  ]

})
export class AnimationdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
