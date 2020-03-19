import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactedComponent } from './contacted/contacted.component';
import { InstalmentsComponent } from './instalments/instalments.component';
const routes: Routes = [
  
  { path: 'instalments', component: InstalmentsComponent },
  { path: 'contacted', component: ContactedComponent},
  {
    path: "",
    loadChildren: "./customer/customers.module#CustomersModule",
  },
  {
    path: "",
    loadChildren: "./verifiedcustomer/verifiedcustomer.module#VerifiedcustomerModule",
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
