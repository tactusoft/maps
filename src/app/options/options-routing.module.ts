import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// Componentes
import { FilterComponent } from './filter/filter.component';
import { LayersComponent } from './layers/layers.component';
import { ControlPanelComponent } from '../options/control-panel/control-panel.component';
import { BoomarksComponent } from './boomarks/boomarks.component';

const routes: Routes =  [
   { path: 'filter', component: FilterComponent},
   { path: 'layer', component: LayersComponent},
   { path: 'panel', component: ControlPanelComponent},
   { path: 'bookmarks', component: BoomarksComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionsRoutingModule { }


