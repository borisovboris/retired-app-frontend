import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  subjectForm = this.fb.group({
    subjectName: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', []] 
  });

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get f() {
    return this.subjectForm.controls;
  }

  submit() {

  }

}
