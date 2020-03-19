import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';
import { ListComponent } from './list/list.component';
import{ViewModule} from './view/view.module';
@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ViewModule
  ]
})
export class CustomersModule { }
