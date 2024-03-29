import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { PeriodsRoutingModule } from './periods-routing.module';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [ListComponent, ViewComponent],
  imports: [
    CommonModule,
    PeriodsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PeriodsModule { }
