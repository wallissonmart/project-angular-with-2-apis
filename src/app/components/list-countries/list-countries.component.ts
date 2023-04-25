import { Component } from '@angular/core';
import { Country } from 'src/app/Country';
import { ListCountriesService } from 'src/app/services/list-countries.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css'],
})
export class ListCountriesComponent {
  badReq = false;
  error = new Subject<boolean>();
  countries: Country[] = [];
  countriesForSearch: Country[] = [];
  faSearch = faSearch;
  noSearch = false;

  constructor(private listCountriesService: ListCountriesService) {
    this.getCountries();
  }

  getCountries(): void {
    this.listCountriesService.getAll().subscribe({
      next: (data) => {
        this.countries = data;
        this.countriesForSearch = data;
      },
      error: (e) => {
        this.error.next(true);
        console.log('deu ruim', e);
      },
    });
  }

  shuffleArray(arr: Country[]): Country[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  search(name: string): void {
    name === ''
      ? (this.countries = this.countriesForSearch)
      : (this.countries = this.countries.filter((countrie) => {
          return countrie.name.common
            .toLowerCase()
            .includes(name.toLowerCase());
        })).length === 0 && (this.noSearch = true);
  }
}
