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
  showMenu: boolean;
  constructor(
    private router: Router
  ) {
    this.itemsMenu = [
      {
        title: 'Control Panel',
        icon: 'pi pi-map',
        routerLink: 'panel',
        command: (click) => { this.modalOpen('Control Panel'); }
      },
      {
        title: 'Leyenda',
        icon: 'pi pi-fw pi-pencil',
        routerLink: 'layer',
        command: (click) => { this.modalOpen('Leyenda'); }
      },
      {
        title: 'Mapas Base',
        icon: 'pi pi-fw pi-map',
        routerLink: 'bookmarks',
        command: (click) => { this.modalOpen('Mapas Base'); }
      },
      {
        label: '',
        icon: 'pi pi-angle-double-right',
        command: (click) => { this.showMenu = false }
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
