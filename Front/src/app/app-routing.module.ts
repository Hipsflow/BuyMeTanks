import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './app/Sistem/api/api.component';
import { CountriesComponent } from './app/Sistem/countries/countries.component';
import { FrontsComponent } from './app/Sistem/fronts/fronts.component';
import { TanksComponent } from './app/Sistem/tanks/tanks.component';
import { UpdateFrontComponent } from './app/Sistem/update-front/update-front.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

const routes: Routes = [
  { path: 'frontpage', component: FrontpageComponent},
  { path: '', component: FrontpageComponent},
  { path: 'api', component: ApiComponent},
  { path: 'countries', component: CountriesComponent},
  { path: 'tanks', component: TanksComponent},
  { path: 'fronts', component: FrontsComponent},
  { path: 'update', component: UpdateFrontComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
