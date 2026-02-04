import { Component, OnInit, signal } from '@angular/core';
import { User } from '../model/user';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, JsonPipe, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  showPassword = signal(false);
  loggedUser = signal<User|undefined>(undefined)
  userList = signal<User[]>([]);
  emailData = '';
  password = '';
  submitted = signal(false);
  isValidUser = signal(false);
  errorMessage = signal('');
  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  async ngOnInit() {
    const response = await fetch('mockData.json');
    const data = await response.json();
    this.userList.set(data);
  }
  togglePassword() {
    this.showPassword.update((val) => !val);
  }
  async onSubmit(myForm: NgForm) {
    this.submitted.set(true);
    this.loggedUser.set(await this.fetchUser())
    if(this.loggedUser()){
      this.isValidUser.set(true);
    }else{
      this.isValidUser.set(false)
    }
    
  }
  async fetchUser(): Promise<User|undefined> {
    const response = await fetch('mockData.json');
    const latestUsers: User[] = await response.json();
    return latestUsers.find((u) => u.email === this.emailData && u.password === this.password);
  }
}
