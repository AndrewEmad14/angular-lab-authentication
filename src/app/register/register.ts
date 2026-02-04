import { Component, OnInit, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User } from '../model/user';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,FormsModule,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register{

  isValidUser = signal(false);
   loggedUser = signal<User|undefined>(undefined)
    userForm = new FormGroup({
        name: new FormControl(null,[Validators.required,Validators.minLength(3)]),
        user_email: new FormControl(null,[Validators.required,Validators.email]),
        user_name: new FormControl(null,[Validators.required,Validators.minLength(3)]),
        user_password: new FormControl(null,[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
        confirm_password: new FormControl(null,[Validators.required,Validators.pattern("")]),
    })
    
    handleUserSubmition() {
    if (this.userForm.valid) {
      // Accessing the data
      const newUser:User|null = this.userForm.value as unknown as User;
      console.log('User Data:', newUser);
      this.loggedUser.set(newUser);
      this.isValidUser.set(true)
      
    } else {
      this.userForm.markAllAsTouched(); // Show all errors if they click submit early
    }
  }
}
/** An actor's name can't match the actor's role */
const passwordMatchCheck: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const password = control.get('user_password')?.value;
  const confirm = control.get('confirm_password')?.value;

  // If they match, return null (meaning no error)
  // If they don't, return an error object
  return password === confirm ? null : { passwordMismatch: true };
};