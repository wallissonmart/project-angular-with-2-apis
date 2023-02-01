import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'
import { Country } from 'src/app/Country';
@Injectable({
  providedIn: 'root'
})
export class ListCountriesService {
private apiUrL = 'https://restcountries.com/v3.1'
  constructor(private http: HttpClient) { }

  getAll(): Observable<Country[]> {
return this.http.get<Country[]>(`${this.apiUrL}/all`)
  }

  getCountriesName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrL}/name/${name}`)
  }
}
