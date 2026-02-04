import { Component, signal } from '@angular/core';
import { Wrapper } from './wrapper/wrapper';
@Component({
  selector: 'app-root',
  
  imports: [Wrapper],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-lab-authentication');
}
