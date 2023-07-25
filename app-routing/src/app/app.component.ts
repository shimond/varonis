import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-routing';
  constructor(private readonly router: Router) { }

  navigateToRoute() {
    this.router.navigate(['/','about']);
  }
}
