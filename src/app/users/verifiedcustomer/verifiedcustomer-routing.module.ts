import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
const routes: Routes = [
  { path: 'verifiedview', component: ViewComponent },
  { path: 'verifiedlist', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifiedcustomerRoutingModule { }
