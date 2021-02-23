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
  dpi: any;

  constructor(){  }
  
  ngOnInit(): void {
    this.dpi = window.devicePixelRatio;
    var canvas = document.querySelector('canvas');
    if(canvas != undefined){
      this.fitToContainer(canvas);
    }

    this.ctx = this.canvas.nativeElement.getContext('2d') as unknown as CanvasRenderingContext2D;
    var c = this.ctx;
    c.fillStyle = 'rgba(255, 0,0,0.5)';
    c.arc(400,200,30,0, Math.PI * 2, false);
    c.stroke();

  }


 fitToContainer(canvas: HTMLCanvasElement) {
    if(canvas){
      // Make it visually fill the positioned parent
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      // ...then set the internal size to match
      canvas.width = canvas.offsetWidth * this.dpi;
      canvas.height = canvas.offsetHeight * this.dpi;
    }
  }

  animate(): void{
    this.ctx.fillStyle = 'blue';    
    this.ctx.strokeStyle = "yellow";
    const circle = new Cirlce(this.ctx);
    circle.draw(600.5,300,this.sliderValue);
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
export class Cirlce {
  constructor(private ctx: CanvasRenderingContext2D) {}
  draw(x: number, y: number, z: number){
    this.ctx.beginPath();
    this.ctx.arc(x, y, z, 0, Math.PI * 2, false);
    this.ctx.stroke();
  }
}
