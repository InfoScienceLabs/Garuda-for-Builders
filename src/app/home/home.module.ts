import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [RouterModule, SharedModule, HomeRoutingModule, HttpClientModule],
  declarations: [MainComponent,HomeComponent, FooterComponent],
  // declarations: [HomeComponent]
})
export class HomeModule {}
