import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  subject$!: Observable<any>;
  sessions$!: Observable<any>;
  subjectId!: string | null;

  constructor
  (
    private readonly route: ActivatedRoute,
    private readonly subjectService: SubjectService,
  ) { }

  ngOnInit(): void {
    this.subjectId = this.route.snapshot.paramMap.get('id');
    this.subject$ = this.subjectService.getSubject(this.subjectId);
  }

}
