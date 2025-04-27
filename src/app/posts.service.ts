import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts = signal<any[]>([]);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  fetchPosts() {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        catchError(err => {
          this.error.set('Erreur lors du chargement des posts.');
          return of([]);
        })
      )
      .subscribe(data => {
        this.posts.set(data);
        this.loading.set(false);
      });
  }
}
