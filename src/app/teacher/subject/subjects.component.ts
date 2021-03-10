import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects$: Observable<Array<string>> | undefined;

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.subjects$ = this.subjectService.getAllSubjects();
  }

  

}
