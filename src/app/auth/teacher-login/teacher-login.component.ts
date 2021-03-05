import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { TeacherService } from 'src/app/teacher/teacher.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {
  loginForm: any;

  constructor() { }

  ngOnInit(): void {
  }

  get f() {
    return this.loginForm.controls;
  }

  submit() {
    
  }
}
