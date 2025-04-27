import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  posts:any[]=[];
  url="https://jsonplaceholder.typicode.com/posts";
  loading=false;
  error:string|null=null;
  constructor(private http:HttpClient) { }
  fetchPosts()
   {
    this.loading=true;
    this.error=null;
    this.http.get<any[]>(this.url).subscribe(
      (data) => {
        this.posts=data;
        this.loading=false;
      },
      (error:any) => {
        this.error="Erreur lors du chargement des posts.";
        this.loading=false;
      }
    );
  }
}
