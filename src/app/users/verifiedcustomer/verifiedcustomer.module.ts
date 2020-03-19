import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { VerifiedcustomerRoutingModule } from './verifiedcustomer-routing.module';
import { ListComponent } from './list/list.component';
import { ViewModule } from './view/view.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ViewModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    VerifiedcustomerRoutingModule
  ]
})
export class VerifiedcustomerModule { }
