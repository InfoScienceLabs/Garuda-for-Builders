import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import "hammerjs";
import { ReactiveFormsModule } from "@angular/forms";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from "./app.routing";
import { AdminModule } from "./admin/admin.module";
import { CustomerModule } from "./customer/customer.module";
import { GovernmentagentModule } from "./governmentagent/governmentagent.module";
import { BuilderdashboardModule } from "./builderdashboard/builderdashboard.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeModule } from "./home/home.module";
//import {SettingsModule} from "./settings/settings.module"
import { SignupComponent } from "./pages/signup/signup.component";
import { SigninComponent } from "./pages/signin/signin.component";
import { AdminService } from "./shared/_services/service";
import { FireBaseComponentsModule } from "./shared/firebase.module";

import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { InterceptService, httpInterceptorProviders } from "./intercept/intercept.service";
import { AuthGuard } from "./auth/auth.guard";
import { AuthenticationService } from "./auth/authentication.service";
import { FormsModule } from '@angular/forms';
import { NotificationService } from './services/notification.service';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { SocketService } from "./services/socket.service";
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignupComponent,
    SigninComponent,
    //HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    FormsModule,
    AdminModule,
    //SettingsModule,
    CustomerModule,
    GovernmentagentModule,
    BuilderdashboardModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    AppRoutingModule,
    FireBaseComponentsModule,
    ReactiveFormsModule,
    MatRadioModule,
    HomeModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: true
    }),
    RouterModule
  ],
  providers: [
    httpInterceptorProviders,
    AuthGuard, AuthenticationService,
    NotificationService,
    SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
