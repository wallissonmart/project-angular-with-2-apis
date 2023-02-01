import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ListPaintingsService {
  private apiUrL = 'https://api.artic.edu/api/v1/artworks';
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.apiUrL}/?limit=100`);
  }

  getDetails(api: string): Observable<any> {
    return this.http.get(`${api}`);
  }

  getPaintingsName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrL}/search?q=${name}&limit=30`);
  }
}
