import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { BuyPropertyComponent,SinglepropertyComponent } from './singleproperty/singleproperty.component';
import { BuypropertComponent } from './buypropert/buypropert.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    MarketplaceRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MarketplaceComponent, SinglepropertyComponent,BuyPropertyComponent, BuypropertComponent],
  entryComponents:[SinglepropertyComponent,BuyPropertyComponent]
})
export class MarketplaceModule { }
