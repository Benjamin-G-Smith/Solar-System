import { animate, keyframes, style } from '@angular/animations';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'Solar-System';
  sliderValue = 50;
  rotatecss = "";

  getSliderValue(){
    console.log(this.sliderValue);
    this.rotatecss = this.sliderValue.toString() + "deg";
    console.log(this.rotatecss);
    }
  onChange(){
    
  }
}
