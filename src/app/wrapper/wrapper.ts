import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from '../nav-bar/nav-bar';

@Component({
  selector: 'app-wrapper',
  imports: [RouterOutlet,NavBar],
  templateUrl: './wrapper.html',
  styleUrl: './wrapper.css',
})
export class Wrapper {
  
}
