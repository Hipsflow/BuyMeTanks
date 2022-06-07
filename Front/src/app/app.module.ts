import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ApiComponent } from './app/Sistem/api/api.component';
import { TanksComponent } from './app/Sistem/tanks/tanks.component';
import { CountriesComponent } from './app/Sistem/countries/countries.component';
import { FrontsComponent } from './app/Sistem/fronts/fronts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule} from '@angular/forms';
import { UpdateFrontComponent } from './app/Sistem/update-front/update-front.component';
import { ConfirmDeleteComponent } from './app/Sistem/confirm-delete/confirm-delete.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';





@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    ApiComponent,
    TanksComponent,
    CountriesComponent,
    FrontsComponent,
    UpdateFrontComponent,
    ConfirmDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
    SweetAlert2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
