import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { PhotosService } from '../photos.service';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-infinite-stream',
  templateUrl: './infinite-stream.component.html',
  styleUrls: ['./infinite-stream.component.scss']
})
export class InfiniteStreamComponent implements OnInit {

  photoBucket: Array<SafeUrl> = [];
  initial: number = 6;
  dataLoading: Boolean = false;

  constructor(private photoService: PhotosService) {

  }

  ngOnInit(): void {
    console.log('loaded /');

    this.photoService.loadPhotosInit().then(() => {
      this.photoBucket = this.photoService.photoBucket;
    });
  }

  addToFavorites(index: number) {
    this.photoService.favoritesBucket.push(this.photoBucket[index]);
    localStorage.setItem('savedBucket', JSON.stringify(this.photoService.favoritesBucket));
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if ((document.body.clientHeight + window.scrollY) >= document.body.scrollHeight) {
      this.dataLoading = true;
      setTimeout(() => {
        this.photoService.loadMorePhotos().then(() => {
          this.photoBucket = this.photoService.photoBucket;
        });
        this.dataLoading = false;
      }, 1000);
    }
  }


}
