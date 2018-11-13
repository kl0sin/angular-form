import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userForm: FormGroup = this.fb.group({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.userForm.value);
  }

  clear() {
    this.userForm.reset();
  }
}
