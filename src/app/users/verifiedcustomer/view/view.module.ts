import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { PersonalComponent } from './personal/personal.component';
import { KycComponent } from './kyc/kyc.component';
import { BankComponent } from './bank/bank.component';
import { WalletComponent } from './wallet/wallet.component';
import { PropertiesComponent } from './properties/properties.component';
@NgModule({
  declarations: [ViewComponent, PersonalComponent, KycComponent, BankComponent, WalletComponent, PropertiesComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewModule { }
