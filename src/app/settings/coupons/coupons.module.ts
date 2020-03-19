import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { CouponsRoutingModule } from './coupons-routing.module';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ViewComponent, ListComponent],
  imports: [
    CommonModule,
    CouponsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CouponsModule { }
