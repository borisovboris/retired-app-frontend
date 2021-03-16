import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Observable, of, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('input') input!: ElementRef;

  inputSubscription!: Subscription;
  teachers$!: Observable<any>;
  subjectId!: string | null;
  selectedTeacher: any | null;
  errorMessage!: string | null;

  constructor(
    private readonly teacherService: TeacherService,
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
      this.teachers$ = this.teacherService.searchTeacher(criteria);
    });


  }

  ngOnDestroy() {
    // we need to close the subscription to prevent memory leaks
    this.inputSubscription!.unsubscribe();
  }

  selectTeacher(teacher: any) {
    this.selectedTeacher = teacher;
    this.errorMessage = null;
  }

  deselectTeacher() {
    this.selectedTeacher = null;
  }

  submit() {

    if(!this.selectedTeacher) { 
      this.errorMessage = 'a teacher must be selected';
      return;
    }

    this.teacherService.addTeacherToSubject(this.selectedTeacher.id, this.subjectId).subscribe(data => {
      this.router.navigate([`/subjects/${this.subjectId}/teachers/`]);
    });

  }

}
