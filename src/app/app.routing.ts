import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { SigninComponent } from "./pages/signin/signin.component";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "./auth/auth.guard";
import { Role, Roles } from "./models/models";
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: "login", component: SigninComponent },
  { path: "signup", component: SignupComponent },
  { path: "", component: HomeComponent },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: Role.Admin },
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "marketplace", loadChildren: "./marketplace/marketplace.module#MarketplaceModule" },
      { path: "property", loadChildren: "./property/admin-property.module#PropertyModule" },
      { path: "builders", loadChildren: "./builder/builder.module#BuilderModule" },
      { path: "users", loadChildren: "./users/users.module#UsersModule" },
      { path: "pages", loadChildren: "./pages/pages.module#PagesModule" },
      { path: "project", loadChildren: "./project/project.module#ProjectModule" },
      { path: "agent", loadChildren: "./agent/agent.module#AgentModule" },
      {path:"settings", loadChildren:"./settings/settings.module#SettingsModule"},
      {
        path: 'analysis',
        loadChildren: './analysis/analysis.module#AnalysisModule'
      }
    ]
  },
  {
    path: "user",
    canActivate : [AuthGuard],
    data: { roles: Role.User },
    loadChildren: "./customer/customer.module#CustomerModule",
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
