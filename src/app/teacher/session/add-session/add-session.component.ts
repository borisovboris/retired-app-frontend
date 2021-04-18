import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit, OnDestroy {
  @ViewChild('datePicker') datePicker!: ElementRef;
  subjectId!: string | null;
  studentSubscription!: Subscription;
  subject$!: Observable<any>;
  students = new FormArray([]);

  constructor
    (
      private readonly route: ActivatedRoute,
      private readonly subjectService: SubjectService,
      private readonly fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.subjectId = this.route.snapshot.paramMap.get('id');
    this.subject$ = this.subjectService.getSubject(this.subjectId);
    this.studentSubscription = this.subjectService.getSubjectStudents(this.subjectId)
    .subscribe((students: any) => {
      students.map((student:any) => {
        this.students.push(new FormControl({ ...student, isChecked: true}));
      })
    })

  }

  startSession() {
    console.log(this.students.controls);
    console.log(this.datePicker.nativeElement.value);
  }

  ngOnDestroy() {
    this.studentSubscription.unsubscribe();
  }
}
