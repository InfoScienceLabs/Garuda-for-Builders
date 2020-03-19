import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ContactedComponent } from './contacted/contacted.component';
import { InstalmentsComponent } from './instalments/instalments.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  declarations: [ContactedComponent, InstalmentsComponent]
})
export class UsersModule { }
