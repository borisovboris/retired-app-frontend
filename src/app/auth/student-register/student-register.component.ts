import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchPasswords } from 'src/app/helpers/match-passwords.validator';
import { StudentService } from 'src/app/student/services/student.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required]],
    facultyNumber: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]] },
    { validator: MatchPasswords });

  constructor(
    private fb: FormBuilder, 
    private studentService: StudentService,
    private router: Router
    ) { }

  ngOnInit(): void {
    


  }

  get f() {
    return this.registerForm.controls;
  }

  submit() {
    const registerForm = this.registerForm;
    const { username, email, facultyNumber, password } = registerForm?.value;

    console.log(registerForm?.value);
    if(registerForm.invalid) {
      return;
    }

    this.studentService.register({ username, email, facultyNumber, password }).subscribe((data) => {
      console.log('register: ' + JSON.stringify(data));
      this.router.navigate(['/auth/student-login']);
    });

  }

}
