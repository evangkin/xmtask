import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { InfiniteStreamComponent } from './infinite-stream/infinite-stream.component';
import { SinglePhotoComponent } from './single-photo/single-photo.component';

const routes: Routes = [
  { path: '', component: InfiniteStreamComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'photos/:id', component: SinglePhotoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
