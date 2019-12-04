import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {
  MatButtonModule,
  MatCardModule, MatDividerModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule, MatProgressSpinnerModule,
  MatToolbarModule
} from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReposComponent } from './repos/repos.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {InterceptorService} from "./services/interceptor.service";
import {SearchService} from "./services/search.service";
import {BASE_URL, BASE_URL_TOKEN} from "./config";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ReposComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  providers: [
   {provide: BASE_URL_TOKEN, useValue: BASE_URL},
   {
     provide: HTTP_INTERCEPTORS,
     useClass: InterceptorService,
     multi: true
   },
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
