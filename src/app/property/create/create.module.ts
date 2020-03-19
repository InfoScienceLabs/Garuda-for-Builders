import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { SharedModule } from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateRoutingModule } from './create-routing.module';
import { AboutComponent } from './about/about.component';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [CreateComponent, AboutComponent, InventoryComponent],
  imports: [
    CommonModule,
    CreateRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreateModule { }
