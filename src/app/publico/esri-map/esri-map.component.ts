import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy
} from '@angular/core';

import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';
import Bookmarks from '@arcgis/core/widgets/Bookmarks';
import Expand from '@arcgis/core/widgets/Expand';
import Home from '@arcgis/core/widgets/Home';
import ScaleBar from '@arcgis/core/widgets/ScaleBar';
import Locate from '@arcgis/core/widgets/Locate';

import { EsriMapService } from '../../services/esri-map.service';

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css'],
})
export class EsriMapComponent implements OnInit, OnDestroy {
  public view: any = null;
  panRequestSubscription: any;
  addBookmarkSubscription: any;

  // The <div> where we will place the map
  @ViewChild('mapViewNode', { static: true }) private mapViewEl: ElementRef;

  constructor(private mapService: EsriMapService) { }

  initializeMap(): Promise<any> {
    const container = this.mapViewEl.nativeElement;

    const webmap = new WebMap({
      portalItem: {
        id: 'aa1d3f80270146208328cf66d022e09c',
      },
    });

    const view = new MapView({
      container,
      map: webmap
    });

    view.ui.add(new Home({ view }), 'top-left');
    view.ui.add(new ScaleBar({ view, style: 'ruler' }), 'bottom-left');
    view.ui.add(new Locate({ view }), 'top-left');

    // bonus - how many bookmarks in the webmap?
    webmap.when(() => {
      if (webmap.bookmarks && webmap.bookmarks.length) {
        console.log('Bookmarks: ', webmap.bookmarks.length);
      } else {
        console.log('No bookmarks in this webmap.');
      }
    });

    this.view = view;
    this.mapService.setViewMap(this.view);
    return this.view.when();
  }

  ngOnInit(): any {
    this.panRequestSubscription = this.mapService.panRequest.subscribe(() => {
      this.panMap(this.mapService.wonderCoordinates);
    });

    this.addBookmarkSubscription = this.mapService.panRequest.subscribe(() => {
      this.addBookmark(this.mapService.wonderCoordinates);
    });

    this.initializeMap().then(() => {
      console.log('The map is ready.');
    });
  }

  ngOnDestroy(): void {
    if (this.view) {
      // destroy the map view
      this.view.destroy();
    }
  }

  panMap(coordinates: string) {
    this.view.goTo(coordinates).then(() => {
      this.view.zoom = 18;
      setTimeout(() => {
        this.mapService.panToWonderComplete();
      }, 2000);
    });
  }

  addBookmark(div: string): void {
    const view: any = this.view;

    const bookmarks = new Bookmarks({
      view,
      editingEnabled: true,
      container: div
    });

    const bkExpand = new Expand({
      view,
      content: bookmarks,
      expanded: true,
    });

    view.ui.add(bkExpand, 'top-right');
  }
}
