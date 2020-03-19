import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
const routes: Routes = [
  { path: 'viewcoupons', component: ViewComponent },
  { path: 'listcoupons', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponsRoutingModule { }
