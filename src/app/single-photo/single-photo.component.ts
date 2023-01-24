import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.scss']
})
export class SinglePhotoComponent {

  constructor(private route: ActivatedRoute, private photosService: PhotosService, private router: Router) {}

  url: SafeUrl = '';
  imageId: number = 0;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') as unknown as number;
    const image = this.photosService.favoritesBucket.at(id) as SafeUrl;
    this.url = image;
    this.imageId = id;
  }

  removeFromFavorites() {
    this.photosService.favoritesBucket.splice(this.imageId, 1);
    this.router.navigate(['favorites']);
  }

}
