import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ExamService } from '../../services/exam.service';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {
  subject$: Observable<any>;
  exams$: Observable<any>;
  subjectId: string | null;

  constructor
  (
    private readonly subjectService: SubjectService,
    private readonly examService: ExamService,
    private readonly route: ActivatedRoute
  ) { 
      this.subjectId = this.route.snapshot.paramMap.get('id');
      this.subject$ = this.subjectService.getSubject(this.subjectId);
      this.exams$ = this.examService.getExams();
  }

  ngOnInit(): void {
  }

}
