import { Component, OnInit } from '@angular/core';
import { EsriMapService } from '../../services/esri-map.service';
import { Router } from '@angular/router';

import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';

@Component({
  selector: 'boomarks-panel',
  templateUrl: './boomarks.component.html',
  styleUrls: ['./boomarks.component.css'],
})
export class BoomarksComponent implements OnInit {

  constructor(private mapService: EsriMapService, private router: Router) { }

  ngOnInit() {
    this.addBookmark();
  }

  addBookmark(): void {
    const view: any = this.mapService.getViewMap();
    const basemapGallery = new BasemapGallery({
      view,
      container: 'bookmarksNode'
    });
    view.ui.add(basemapGallery);
  }
}
