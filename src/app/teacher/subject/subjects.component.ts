import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects$: Observable<any> | undefined;

  constructor(
    private readonly subjectService: SubjectService,
    private readonly router: Router
    ) { }

  ngOnInit(): void {
    this.subjects$ = this.subjectService.getAllSubjects();
  }
  

}
