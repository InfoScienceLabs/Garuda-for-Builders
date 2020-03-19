import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { ViewRoutingModule } from './view-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { PersonalComponent } from './personal/personal.component';
import { KycComponent } from './kyc/kyc.component';
import { BankComponent } from './bank/bank.component';
@NgModule({
  declarations: [ViewComponent, PersonalComponent, KycComponent, BankComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ViewModule { }
