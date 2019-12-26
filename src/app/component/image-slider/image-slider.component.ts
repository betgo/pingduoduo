import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit ,AfterViewInit{

  @ViewChild('imageSlider', { static: true })  imgSlider: ElementRef;

  @Input() sliders: ImageSlider[] = [];
  @Input() intervalBySeconds = 2;
  selectedIndex = 0;
  intervalId;
  constructor(private rd2: Renderer2) { }

  ngOnInit() {
  }

}
