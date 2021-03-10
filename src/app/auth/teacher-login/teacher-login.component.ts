import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/teacher/teacher.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder, 
    private ts: TeacherService,
    private router: Router) { }

  ngOnInit(): void {
  }

  get f() {
    return this.loginForm.controls;
  }

  submit() {
    const { username, password } = this.loginForm?.value;
    
    if(this.loginForm.invalid) {
      return;
    }

    this.ts.login(username, password).subscribe((data) => {
      localStorage.setItem("token_id", data.token_id);
      this.router.navigate(['/subjects']);
    }
    );
  }
  
}
