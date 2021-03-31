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
  
  constructor(
    private readonly route: ActivatedRoute,
    private readonly subjectService: SubjectService,
    ) { 
      const subjectId = this.route.snapshot.paramMap.get('id');
      this.subject$ = this.subjectService.getSubject(subjectId);
      this.subjectTeachers$ = this.subjectService.getSubjectTeachers(subjectId);
  }

  ngOnInit(): void {
  }

}
