import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
const routes: Routes = [
  {
    path: "",
    component: SettingsComponent,
    children: [
      {
        path: "coupons",
        loadChildren: "./coupons/coupons.module#CouponsModule",
      },
      {
        path: "projecttype",
        loadChildren: "./projecttype/projecttype.module#ProjecttypeModule",
      },
      {
        path: "propertytype",
        loadChildren: "./propertytype/propertytype.module#PropertytypeModule",
      },
      {
        path: "taxation",
        loadChildren: "./taxation/taxation.module#TaxationModule",  
      },
      {
        path: "status",
        loadChildren: "./status/status.module#StatusModule",  
      },
      { 
        path: "config",
        loadChildren: "./config/config.module#ConfigModule",     
      },
      {
        path: "periods",
        loadChildren: "./periods/periods.module#PeriodsModule",  
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
