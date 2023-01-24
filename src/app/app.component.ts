import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'photobucket';

  constructor(private router: Router) {

  }

  navigate(path: string) {
    if (path === 'photos') {
      this.router.navigate(['/']);
    } else if (path === 'favorites') {
      this.router.navigate(['favorites']);
    }
  }
}
