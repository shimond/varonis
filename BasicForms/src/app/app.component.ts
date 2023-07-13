import { Component } from '@angular/core';
import { CommonModule, NgIf, NgSwitch } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { SharedModule } from './shared/shared.module';
import { EditPersonComponent } from './components/edit-person/edit-person.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TestComponent, SharedModule, EditPersonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modules-and-more';
}
