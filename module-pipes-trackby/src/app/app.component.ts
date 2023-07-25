import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modules-app';
  constructor() {

  }

  showtitle() {
    //console.log('showtitle');
    return this.title;
  }

}
