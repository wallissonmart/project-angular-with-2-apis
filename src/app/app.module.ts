import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgOptimizedImage } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component';
import { ListCountriesComponent } from './components/list-countries/list-countries.component';
import { ListPaintingsComponent } from './components/list-paintings/list-paintings.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, ListCountriesComponent, ListPaintingsComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgOptimizedImage, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
