import { Component, OnInit } from '@angular/core';
import * as svgPanZoom from 'svg-pan-zoom';
@Component({
  selector: 'svg-view',
  templateUrl: './svg-view.component.html'
})
export class SvgComponent implements  OnInit {

ngOnInit(){

  const panZoomTiger = svgPanZoom('#svg-id');

}

  
}