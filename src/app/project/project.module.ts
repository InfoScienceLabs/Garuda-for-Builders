import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProjectRoutingModule } from './project-routing.module';
import { CreateComponent } from './create/create.component';
//import { ViewComponent } from './view/view.component';
import{ ViewModule } from './view/view.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule,
    ViewModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProjectModule { }
