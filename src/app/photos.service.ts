import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  url: string = `https://picsum.photos/200/300`;
  photoBucket: Array<SafeUrl> = [];
  favoritesBucket: Array<SafeUrl> = [];
  initial: number = 6;

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) { }

  async loadPhotosInit() {
    this.photoBucket = new Array<SafeUrl>();
    this.addPhotos();
  }

  addPhotos() {
    for (let i = 0; i < this.initial; i++) {
      this.getPic().subscribe(pic => {
        let objectURL = URL.createObjectURL(pic);
        let image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        this.photoBucket.push(image);
      });
    }
  }

  async loadMorePhotos() {
    this.addPhotos();
  }

  getPic(): Observable<any> {
    return this.httpClient.get(this.url, { responseType: 'blob' });
  }

}
