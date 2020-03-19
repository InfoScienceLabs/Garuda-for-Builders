import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewComponent} from './view.component'
import { ViewRoutingModule } from './view-routing.module';
import { SharedModule } from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PaperworkComponent } from './paperwork/paperwork.component';
@NgModule({
  declarations: [ViewComponent, AboutComponent, InventoryComponent, PaperworkComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewModule { }
