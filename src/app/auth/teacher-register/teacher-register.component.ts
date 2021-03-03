import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatchPasswords } from '../../helpers/match-passwords.validator'

@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.css']
})
export class TeacherRegisterComponent implements OnInit {
  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]] },
    { validator: MatchPasswords });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    


  }

  get f() {
    return this.registerForm.controls;
  }

  submit() {
    console.log(this.registerForm?.value);
    console.log(this.registerForm?.controls);
  }

}
