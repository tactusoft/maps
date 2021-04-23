import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Modelos
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  showModal: boolean;
  modalTitle = '';
  itemsMenu: MenuItem[];
  constructor(
    private router: Router
  ) {
    this.itemsMenu = [
      {
        label: 'Control Panel',
        icon: 'pi pi-map',
        routerLink: 'panel',
        command: (click) => { this.modalOpen('Control Panel'); }
      },
      {
        label: 'Layers',
        icon: 'pi pi-fw pi-pencil',
        routerLink: 'layer',
        command: (click) => { this.modalOpen('Layers'); }
      },
      {
        label: 'Bookmarks',
        icon: 'pi pi-fw pi-bookmark',
        routerLink: 'bookmarks',
        command: (click) => { this.modalOpen('Bookmarks'); }
      },
      {
        label: 'Markers',
        icon: 'pi pi-map-marker',
        items: [
          {
            label: 'New',
            icon: 'pi pi-map-marker',
            routerLink: 'filter',
            command: (click) => { this.modalOpen('New Marker'); }
          },
          {
            label: 'Delete',
            icon: 'pi pi-map-marker',

          },
          {
            label: 'Edit',
            icon: 'pi pi-map-marker'
          }
        ]
      },
    ];
  }

  modalOpen(title: string): void {
    this.showModal = true;
    this.modalTitle = title;
  }

  modalClose(): void {
    this.router.navigate(['']);
    this.showModal = false;
  }

  onDeactivate(event): void {
    this.showModal = false;
  }
}
