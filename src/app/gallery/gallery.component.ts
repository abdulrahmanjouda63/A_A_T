import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  modelImg:any = '';
  flag:boolean = true;

  srcs:(string|undefined)[] = [
    "assets/images/poert1.png",
    "assets/images/port2.png",
    "assets/images/port3.png",
    "assets/images/poert1.png",
    "assets/images/port2.png",
    "assets/images/port3.png",,
  ];

  hideModel(element:EventTarget|null,img:HTMLImageElement):void{
    if(element == img) return;
      this.flag = true


  }

  constructor(){}
}
