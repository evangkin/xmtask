import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {

  favoritesBucket: Array<SafeUrl> = [];

  constructor(private sanitizer: DomSanitizer, private photosService: PhotosService) {}

  ngOnInit(): void {
      var savedBucket = localStorage.getItem('savedBucket') || "[]";
      var parsed = JSON.parse(savedBucket) as Array<SafeUrl>;
      for (let i = 0; i < parsed.length; i++) {
        this.favoritesBucket.push(parsed[i]);
      } // figure this out
  }

  viewPhoto(index: number) {
    console.log('viewing: ' + index);
  }

}
