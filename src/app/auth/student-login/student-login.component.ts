import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student/services/student.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder, 
    private studentService: StudentService,
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

    this.studentService.login(username, password).subscribe((data) => {
      localStorage.setItem("token_id", data.token_id);
      this.router.navigate(['/student/subjects']);
    }
    );
  }

}
