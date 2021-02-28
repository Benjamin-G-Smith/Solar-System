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

  system = [
        {"size": 20,"name":"A"},
        {"size": 80,"name":"B"},
        {"size": 100,"name":"C"},
        {"size": 220,"name":"D"},
    ];

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
    this.drawPlanets(this.system);

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

  drawPlanets(planets: any){
    this.ctx = this.canvas.nativeElement.getContext('2d') as unknown as CanvasRenderingContext2D;
    this.ctx.fillStyle = 'blue';    
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 2;
    const circle = new Cirlce(this.ctx);
    this.system.forEach((planet: { size: number; }) =>{
      circle.draw(250.5,250, planet.size)

    });
  }

  toRadians = function(degrees: any) {
    return degrees * Math.PI / 180;
  }
  animate(): void{
    this.ctx.fillStyle = 'blue';    
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 2;
    const circle = new Cirlce(this.ctx);
    circle.draw(250.5,250,this.sliderValue);
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
    this.ctx.beginPath();
    this.ctx.fillStyle = "red";
    this.ctx.arc(x-z,y, 10, 0, Math.PI * 2, false);
    console.log(x,y);
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(x,y-z, 10, 0, Math.PI * 2, false);
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(x,y+z, 10, 0, Math.PI * 2, false);
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(x+z,y, 10, 0, Math.PI * 2, false);
    this.ctx.fill();


    //var sub_angle=((x-z)/10)*this.toRadians(20);
    //var sub_angle=this.toRadians(20);
    var sub_angle=this.toRadians(z);
    console.log(sub_angle);
    var fx = Math.cos(sub_angle);
    var fy = Math.sin(sub_angle);
    var lx = -Math.sin(sub_angle);
    var ly = Math.cos(sub_angle);

    var xi=x+(x-z)*(Math.sin(sub_angle)*fx+ (1-Math.cos(sub_angle))*(-lx));
    var yi=y+(x-z)*(Math.sin(sub_angle)*fy + (1-Math.cos(sub_angle))*(-ly));
    console.log(xi, yi);
    //this.ctx.arc(xi,yi, 10, 0, Math.PI * 2, false);
    //this.ctx.fill();
  }
  toRadians = function(degrees: any) {
    return degrees * Math.PI / 180;
  }

}
