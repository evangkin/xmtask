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

  constructor(private photosService: PhotosService, private router: Router, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
      const savedBucket = localStorage.getItem('savedBucket') || "[]";
      let parsed = JSON.parse(savedBucket);
      for (let i = 0; i < parsed.length; i++) {
        const impl = parsed[i]['changingThisBreaksApplicationSecurity'];
        let image = this.sanitizer.bypassSecurityTrustUrl(impl);
        this.favoritesBucket.push(image);
      }
      this.photosService.favoritesBucket = this.favoritesBucket;
  }

  viewPhoto(index: number) {
    this.router.navigate(['photos/' + index]);
  }

}
