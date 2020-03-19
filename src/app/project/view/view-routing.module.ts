import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PaperworkComponent } from './paperwork/paperwork.component';
const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "inventory", component: InventoryComponent },
  {path: "paperwork", component: PaperworkComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
