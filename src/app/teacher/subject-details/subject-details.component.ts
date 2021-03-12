import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.css']
})
export class SubjectDetailsComponent implements OnInit {
  subject$: Observable<any>;

  constructor(
    private readonly subjectService: SubjectService,
    private readonly route: ActivatedRoute
    ) {
      const subjectId = this.route.snapshot.paramMap.get('id');
      this.subject$ = this.subjectService.getSubject(subjectId);
    }

  ngOnInit(): void {
    
  }

}
