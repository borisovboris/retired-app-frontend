import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { TeacherService } from 'src/app/teacher/teacher.service';
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

  constructor(private fb: FormBuilder, public ts: TeacherService) { }

  ngOnInit(): void {
    


  }

  get f() {
    return this.registerForm.controls;
  }

  submit() {
    const registerForm = this.registerForm;
    const { username, email, password } = registerForm?.value;

    if(registerForm.invalid) {
      return;
    }

    this.ts.create(username, email, password);
    
  }

}
