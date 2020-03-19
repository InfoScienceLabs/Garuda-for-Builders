import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { Routes } from '@angular/router';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RouterModule } from '@angular/router';
import { MaterialComponentsModule } from '../shared/material.module';
import { FormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import{UserHeaderModule} from './user-header/user-header.module'
import { SinglepropertyComponent } from './singleproperty/singleproperty.component';
import { BuyComponent } from './singleproperty/buy/buy.component';
import { WalletComponent } from './wallet/wallet.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes : Routes = [{
  path: 'user',
  component: UsersComponent,
  children: [
    { path: '', redirectTo: 'marketplace', pathMatch: 'full' },
    { path: 'marketplace', component: MarketplaceComponent },
    { path: 'marketplace/viewproperty/:id', component: SinglepropertyComponent },
    { path: 'profile' , component: ProfileComponent },
    { path: 'wallet' , component: WalletComponent },
    { path: 'transactions' , component: TransactionsComponent },
    { path: 'new-feeds', component: NotificationsComponent},
    { path: 'property', loadChildren: './property/property.module#UserPropertyModule'},
    { path: "**", redirectTo: "/user" }
  ]

}
];

@NgModule({
  declarations: [UsersComponent, UserFooterComponent, ProfileComponent,BuyComponent, TransactionsComponent,WalletComponent,MarketplaceComponent, NotificationsComponent, SinglepropertyComponent],
  entryComponents:[BuyComponent, SinglepropertyComponent],
  imports: [
    CommonModule ,
    RouterModule.forChild(routes), 
    MaterialComponentsModule, 
    FormsModule,
    UserHeaderModule,
    SharedModule
  ]
})
export class CustomerModule { }
