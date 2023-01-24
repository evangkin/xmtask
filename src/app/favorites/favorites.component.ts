import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {

  favoritesBucket: Array<SafeUrl> = [];

  constructor(private sanitizer: DomSanitizer, private photosService: PhotosService,
              private router: Router) {}

  ngOnInit(): void {
      const savedBucket = localStorage.getItem('savedBucket') || "[]";
      /*let parsed = JSON.parse(savedBucket) as Array<SafeUrl>;
      for (let i = 0; i < parsed.length; i++) {
        
      }*/
      this.favoritesBucket = this.photosService.favoritesBucket;
  }

  viewPhoto(index: number) {
    this.router.navigate(['photos/' + index]);
  }

}
