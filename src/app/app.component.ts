import { Component, effect } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: any;
  loading: any;
  error: any;

  constructor(private postsService: PostsService) {
    // Maintenant on initialise ici, après l'injection de postsService
    this.posts = this.postsService.posts;
    this.loading = this.postsService.loading;
    this.error = this.postsService.error;

    // Appel automatique à l'initialisation
    this.postsService.fetchPosts();

    // Effet : log quand les posts changent
    effect(() => {
      console.log('Nombre de posts :', this.posts().length);
    });
  }
}
