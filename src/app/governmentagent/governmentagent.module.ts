import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { GovernmentComponent } from './government/government.component';
import { GovernmentHeaderComponent } from './government-header/government-header.component';
import { GovernmentFooterComponent } from './government-footer/government-footer.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MaterialComponentsModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { TaxComponent } from './tax/tax.component';
import { SharedModule } from '../shared/shared.module';
import { SinglepropertyComponent } from './singleproperty/singleproperty.component';
import { PropertylistingComponent } from './propertylisting/propertylisting.component';
import { SinglepropertylistingComponent } from './singlepropertylisting/singlepropertylisting.component';


const routes : Routes = [{
  path: 'government',
  component: GovernmentComponent,
  children: [
    { path: '', redirectTo: 'marketplace', pathMatch: 'full' },
    { path: 'marketplace', component: MarketplaceComponent },
    { path: 'marketplace/view/:id', component: SinglepropertyComponent },
    { path: 'tax', component: TaxComponent },
    { path: 'propertyconfirm', component: PropertylistingComponent },
    { path: 'propertyconfirm/:id/:id' , component: SinglepropertylistingComponent },
    { path: 'profile' , component: ProfileComponent },
    { path : 'new-feeds', component: NotificationComponent},
    { path : 'property', loadChildren: './gov-property/gov-property.module#GovPropertyModule'},
    { path: "**", redirectTo: "/government" }
  ]

}
];

@NgModule({
  declarations: [MarketplaceComponent, GovernmentComponent, GovernmentHeaderComponent, GovernmentFooterComponent, NotificationComponent, ProfileComponent, TaxComponent, SinglepropertyComponent, PropertylistingComponent, SinglepropertylistingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), 
    MaterialComponentsModule, 
    FormsModule,
    SharedModule
  ]
})
export class GovernmentagentModule { }
