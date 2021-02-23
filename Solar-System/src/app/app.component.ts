import { animate, keyframes, style } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // animation triggers go here
  ]
})
export class AppComponent implements OnInit{
  title = 'Solar-System';
  sliderValue = 50;
  rotatecss = "";

  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;
  ctx!: CanvasRenderingContext2D;

  constructor(){

  }
  
  ngOnInit(): void {
    var canvas = document.querySelector('canvas');
    if(canvas != undefined){
      canvas.width = window.innerWidth;
      canvas.height = window.innerWidth;
    }



    this.ctx = this.canvas.nativeElement.getContext('2d') as unknown as CanvasRenderingContext2D;
    var c = this.ctx;
    
    c.beginPath();
    c.moveTo(0,0);
    c.lineTo(200,100);
    c.lineTo(400,400);
    c.stroke();


  }

  animate(): void{
    this.ctx.fillStyle = 'red';
    const square = new Square(this.ctx);
    square.draw(5, 1, 20);
  }
  getSliderValue(){
    console.log(this.sliderValue);
    this.rotatecss = this.sliderValue.toString() + "deg";
    console.log(this.rotatecss);
    }
  onChange(){
    
  }
}

export class Square {
  constructor(private ctx: CanvasRenderingContext2D) {}

  draw(x: number, y: number, z: number) {
    this.ctx.fillRect(z * x, z * y, z, z);
  }
}
