import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  url: string = `https://picsum.photos/200/300`;
  photoBucket: Array<SafeUrl> = [];

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) { }

  loadPhotos(initial: number) {
    this.photoBucket = new Array<SafeUrl>();
    for (let i = 0; i < initial; i++) {
      this.getPic().subscribe(pic => {
        let objectURL = URL.createObjectURL(pic);       
        let image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        this.photoBucket.push(image);
      });
    }
  }

  getPic(): Observable<any> {
    return this.httpClient.get(this.url, { responseType: 'blob' });
  }

}
