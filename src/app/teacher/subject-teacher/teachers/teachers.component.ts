import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  subject$: Observable<any>;
  subjectTeachers$: Observable<any>;
  subjectId: string | null;
  
  constructor(
    private readonly route: ActivatedRoute,
    private readonly subjectService: SubjectService,
    ) { 
      this.subjectId = this.route.snapshot.paramMap.get('id');
      this.subject$ = this.subjectService.getSubject(this.subjectId);
      this.subjectTeachers$ = this.subjectService.getSubjectTeachers(this.subjectId);
  }

  ngOnInit(): void {
  }

  removeTeacherFromSubject(teacherId: any) {
    this.subjectService.removeTeacherFromSubject(teacherId, this.subjectId).subscribe((data) => {
      this.subjectTeachers$ = this.subjectService.getSubjectTeachers(this.subjectId);
    });
  }

}
