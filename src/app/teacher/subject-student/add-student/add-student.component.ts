import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { StudentService } from 'src/app/student/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  @ViewChild('input') input!: ElementRef;

  inputSubscription!: Subscription;
  students$!: Observable<any>;
  subjectId!: string | null;
  selectedStudent: any | null;
  errorMessage!: string | null;
  @Output() newStudentEvent = new EventEmitter<void>();


  constructor(
    private readonly studentService: StudentService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.subjectId = this.route.snapshot.paramMap.get('id');
  }

  ngAfterViewInit() {

    this.inputSubscription = fromEvent(this.input.nativeElement, 'keyup')
    .pipe(
      filter(Boolean),
      debounceTime(300),
      distinctUntilChanged(),
      tap((text) => { console.log(text) })
    ).subscribe(() => {
      const criteria = this.input.nativeElement.value;
      this.students$ = this.studentService.searchStudent(criteria);
    });


  }

  ngOnDestroy() {
    // we need to close the subscription to prevent memory leaks
    this.inputSubscription!.unsubscribe();
  }

  selectStudent(student: any) {
    this.selectedStudent = student;
    this.errorMessage = null;
  }

  deselectStudent() {
    this.selectedStudent = null;
  }

  submitStudent() {

    if(!this.selectedStudent) { 
      this.errorMessage = 'a student must be selected';
      return;
    }

    this.studentService.addStudentToSubject(this.selectedStudent.id, this.subjectId).subscribe(data => {
      this.selectedStudent = null;
      this.newStudentEvent.emit();
    });

  }

}
