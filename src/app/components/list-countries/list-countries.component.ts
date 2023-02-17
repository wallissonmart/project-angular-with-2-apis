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
  error = new Subject<boolean>;
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
        this.error.next(true)
        console.log('deu ruim', e);
      },
    });
  }

  // Função para randomizar array
  shuffleArray(arr: Country[]): Country[] {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
      // Escolhendo elemento aleatório
      const j = Math.floor(Math.random() * (i + 1));
      // Reposicionando elemento
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
  }

  search(name: string): void {
    console.log('cha')
    //const target = e.target as HTMLInputElement;
    //const value = target.value;
    /*name !== ''
      ? this.listCountriesService.getCountriesName(e).subscribe({
          next: (v) => {
            (this.countries = v), (this.badReq = false);
          },
          error: (e) => {
            console.log('deu ruim', e), (this.badReq = true);
          },
        })
      : (this.badReq = false);
  }*/
    name === ''
      ? (this.countries = this.countriesForSearch)
      : (this.countries = this.countries.filter((countrie) => {
          return countrie.name.common
            .toLowerCase()
            .includes(name.toLowerCase());
        })).length === 0 && (this.noSearch = true);
  }
}
