import { Route } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "./components/home/home.component";
import { KefelComponent } from "./components/kefel/kefel.component";
import { MainGuardService } from "./service/main-guard.service";
import { MainDecativateService } from "./service/main-decativate.service";

export const APPLICATION_ROUTES: Route[] = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent, },
  { path: 'kefel', component: KefelComponent, canActivate: [MainGuardService], canDeactivate: [MainDecativateService] },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(x => x.AdminModule) },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**',  redirectTo: 'page-not-found' }

];