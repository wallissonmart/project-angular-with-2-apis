import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ListPaintingsService } from 'src/app/services/list-paintings.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-paintings',
  templateUrl: './list-paintings.component.html',
  styleUrls: ['./list-paintings.component.css'],
})
export class ListPaintingsComponent {
  apiImgUrl = 'https://www.artic.edu/iiif/2/';
  error = new Subject<boolean>();
  paintings: any[] = [];
  arrSearch: any[] = [];
  noSearch = false;
  faSearch = faSearch;

  constructor(private listPaintingsService: ListPaintingsService) {
    this.getPaintings();
  }

  getPaintings(): void {
    this.listPaintingsService.getAll().subscribe({
      next: (data) => {
        this.paintings = this.shuffleArray(data.data).slice(0, 10);
      },
      error: (e) => {
        console.log('deu ruim', e);
        this.error.next(true);
      },
    });
  }

  shuffleArray(arr: any[]): any[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  details(api: string): any {
    this.listPaintingsService.getDetails(api).subscribe({
      next: (data) => {
        this.arrSearch.push(data.data);
        return (this.paintings = this.arrSearch);
      },
    });
  }

  search(name: string): void {
    this.arrSearch = [];
    this.paintings = [];

    name === ''
      ? this.getPaintings()
      : this.listPaintingsService.getPaintingsName(name).subscribe({
          next: (data) => {
            data.data.length == 0
              ? ((this.paintings = []), (this.noSearch = true))
              : data.data.map(
                  (item: any) => this.details(item.api_link),
                  (this.noSearch = false)
                );
          },
          error: (e) => {
            console.log('deu ruim', e);
          },
        });
  }
}
