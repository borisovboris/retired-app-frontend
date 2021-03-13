import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/core/models/teacher.model';
import { TeacherService } from 'src/app/teacher/services/teacher.service';
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
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]] },
    { validator: MatchPasswords });

  constructor(
    private fb: FormBuilder, 
    private teacherService: TeacherService,
    private router: Router
    ) { }

  ngOnInit(): void {
    


  }

  get f() {
    return this.registerForm.controls;
  }

  submit() {
    const registerForm = this.registerForm;
    const teacher: Teacher = registerForm?.value;

    if(registerForm.invalid) {
      return;
    }

    this.teacherService.register(teacher).subscribe((data) => {
      console.log('register: ' + JSON.stringify(data));
      this.router.navigate(['/auth/teacher-login']);
    });

  }

}
