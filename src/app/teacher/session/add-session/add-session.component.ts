import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SessionService } from '../../services/session.service';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit, OnDestroy {
  @ViewChild('datePicker') datePicker!: ElementRef;

  sessionForm = this.fb.group({
    name: ['', [Validators.required]],
    date: ['', [Validators.required]],
    examId: ['', [Validators.required]],
    start: ['', [Validators.required]],
    end: ['', [Validators.required]]
  });
  students = new FormArray([]);

  subjectId!: string | null;
  studentSubscription!: Subscription;
  subject$!: Observable<any>;
  exams$!: Observable<any>;
  studentError: any = null;


  constructor
    (
      private readonly route: ActivatedRoute,
      private readonly subjectService: SubjectService,
      private sessionService: SessionService,
      private readonly fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.subjectId = this.route.snapshot.paramMap.get('id');
    this.subject$ = this.subjectService.getSubject(this.subjectId);
    this.exams$ = this.subjectService.getSubjectExams(this.subjectId).pipe(tap(data => {
      if(Object.entries(data).length === 0) {
        return;
      }
      // use Object.values to get the values of the variable "data" which is of type Object
      // the values are presented in an array
      // get the first element of the array and take its attribute ID
      // set this ID as the default value of the property "examId" of the form sessionForm
      // this default value is used for the dropdown of the select option
      const examId = Object.values(data)[0].id
      this.sessionForm.patchValue({ examId });
    })
    );

    this.studentSubscription = this.subjectService.getSubjectStudents(this.subjectId)
      .subscribe((students: any) => {
        students.map((student: any) => {
          this.students.push(new FormControl({ ...student, isChecked: true }));
        })
      });

  }

  startSession() {
    const { name, date, examId, start, end } = this.sessionForm.value;

    // format of incoming date
    // Tue Apr 06 2021 00:00:00 GMT+0300 (GMT+03:00)
    const tokens = date.toString().split(' ');

    // interpolate start time into the string of date
    tokens[4] = `${start}:00`;
    const startTime = tokens.join(' ');

    // interpolate end time into the string of date
    tokens[4] = `${end}:00`;
    const endTime = tokens.join(' ');


    // get all students that are checked
    const studentIds = this.students.controls
      .map((control: any) => {
        if (control.value.isChecked) {
          return control.value.id;
        }
        return undefined;

      }).filter(item => {
        return item !== undefined;
      });

    //if no students are checked, dont send the form
    if (studentIds.length <= 0) {
      this.studentError = "At least one student is necessary for the session"
      return;
    }

    this.sessionService.createSession({
      name, 
      subjectId: this.subjectId,
      examId,
      studentIds,
      date: date.toString(),
      startTime,
      endTime,
    }).subscribe((data) => {
      console.log(data);
    })

  }

  ngOnDestroy() {
    this.studentSubscription.unsubscribe();
  }
}
