import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'photobucket';
  route: String = 'main_bucket';

  highlight(path: String) {
    if (path !== 'main') {
      this.route = 'favorites';
    } else {
      this.route = 'main_bucket';
    }
  }
}
