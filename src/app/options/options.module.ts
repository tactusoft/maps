import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Componentes
import { FilterComponent } from './filter/filter.component';
import { OptionsRoutingModule } from './options-routing.module';
import { LayersComponent } from './layers/layers.component';
import { ControlPanelComponent } from '../options/control-panel/control-panel.component';
import { BasemapGalleryComponent } from './basemapGallery/basemapGallery.component';
// Modulos

import { ReactiveFormsModule } from '@angular/forms';
// PrimeNg
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [FilterComponent, LayersComponent, ControlPanelComponent, BasemapGalleryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OptionsRoutingModule,
    DropdownModule,
    CheckboxModule,
    InputTextModule,
    InputTextareaModule
  ]
})
export class OptionsModule { }
