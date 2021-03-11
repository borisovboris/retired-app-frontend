import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'src/app/core/models/subject.model';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  subjectForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', []] 
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly ss: SubjectService,
    private readonly router: Router
    ) { }

  ngOnInit(): void {
  }

  get f() {
    return this.subjectForm.controls;
  }

  submit() {
    const subject: Subject = this.subjectForm.value;
    if(subject.description === "") {
      subject.description = "This subject doesn't have a description yet.";
    }

    this.ss.createSubject(subject).subscribe((data) => {
      this.router.navigate(['/subjects'])
    });
  }

}
