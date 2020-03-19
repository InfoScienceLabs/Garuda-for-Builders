import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyRoutingModule } from './admin-property-routing.module';
import {CreateModule} from './create/create.module'
//import { CreateComponent } from './create/create.component';
import { SharedModule } from '../shared/shared.module';
import { ViewComponent } from './view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    CreateModule,
    SharedModule,
    PropertyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PropertyModule { }
