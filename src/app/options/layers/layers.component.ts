import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import LayerList from '@arcgis/core/widgets/LayerList';
import { EsriMapService } from 'src/app/services/esri-map.service';
@Component({
  selector: 'app-layers',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.css']
})
export class LayersComponent implements AfterViewInit {

  @ViewChild('layersNode', { static: true }) private mapGalleryNode: ElementRef;

  constructor(private mapService: EsriMapService, private router: Router) { }

  ngAfterViewInit() {
    this.addBookmark();
  }

  addBookmark(): void {
    const widget = new LayerList({
      view: this.mapService.getViewMap(),
      container: this.mapGalleryNode.nativeElement
    });
  }

}
