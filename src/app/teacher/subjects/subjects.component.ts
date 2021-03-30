import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { SubjectService } from '../services/subject.service';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects$!: Observable<any>;

  constructor(
    private readonly teacherService: TeacherService,
    private readonly router: Router
    ) { }

  ngOnInit(): void {
    this.subjects$ = this.teacherService.getAllSubjects();
  }
  

}
