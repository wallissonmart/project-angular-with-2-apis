import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCountriesComponent } from './components/list-countries/list-countries.component';
import { ListPaintingsComponent } from './components/list-paintings/list-paintings.component';

const routes: Routes = [
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  {
    path: 'countries',
    component: ListCountriesComponent,
  },
  { path: 'paintings', component: ListPaintingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
