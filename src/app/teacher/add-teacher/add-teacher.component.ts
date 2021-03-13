import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
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
  teachers!: Observable<any>;

  constructor(private readonly teacherService: TeacherService) { }

  ngOnInit(): void {
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
      this.teachers = this.teacherService.searchTeacher(criteria);
    });

  }

  ngOnDestroy() {
    // we need to close the subscription to prevent memory leaks
    this.inputSubscription.unsubscribe();
  }

}
