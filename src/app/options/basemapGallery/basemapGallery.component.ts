import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { EsriMapService } from '../../services/esri-map.service';
import { Router } from '@angular/router';

import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';

@Component({
  selector: 'basemapGallery-panel',
  templateUrl: './basemapGallery.component.html',
  styleUrls: ['./basemapGallery.component.css'],
})
export class BasemapGalleryComponent implements AfterViewInit {

  @ViewChild('mapGalleryNode', { static: true }) private mapGalleryNode: ElementRef;

  constructor(private mapService: EsriMapService, private router: Router) { }

  ngAfterViewInit() {
    this.addBookmark();
  }

  addBookmark(): void {
    const widgetContainer1 = this.mapGalleryNode.nativeElement;
    const view: any = this.mapService.getViewMap();
    const basemapGallery = new BasemapGallery({
      view,
      container: widgetContainer1
    });
  }
}
