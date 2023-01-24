import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PhotosService } from '../photos.service';


@Component({
  selector: 'app-infinite-stream',
  templateUrl: './infinite-stream.component.html',
  styleUrls: ['./infinite-stream.component.scss']
})
export class InfiniteStreamComponent implements OnInit {

  photoBucket: Array<SafeUrl> = [];
  initial: number = 6;

  constructor(private photoService: PhotosService, private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    console.log('loaded /');

    this.photoService.loadPhotos(this.initial);
    this.photoBucket = this.photoService.photoBucket;
  }

  addToFavorites(index: number) {
    console.log('save index: ' + index);
  }


}
