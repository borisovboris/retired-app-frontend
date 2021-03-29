import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ExamService } from '../services/exam.service';
import { SubjectService } from '../services/subject.service';
import { TopicService } from '../services/topic.service';

@Component({
  selector: 'app-exam-details',
  templateUrl: './exam-details.component.html',
  styleUrls: ['./exam-details.component.css']
})
export class ExamDetailsComponent implements OnInit {
  exam$!: Observable<any>;
  topics$!: Observable<any>;
  questions$!: Observable<any>;
  examQuestions$!: Observable<any>;
  examId: string | null;
  subjectId: string | null;
  constructor
    (
      private readonly examService: ExamService,
      private readonly subjectService: SubjectService,
      private readonly topicService: TopicService,
      private readonly route: ActivatedRoute
    ) {
    this.examId = this.route.snapshot.paramMap.get('exam-id');
    this.subjectId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.exam$ = this.examService.getExam(this.examId);
    this.examQuestions$ = this.examService.getExamQuestions(this.examId).pipe(tap(data => console.log(data)));
    this.topics$ = this.subjectService.getSubjectTopics(this.subjectId);
  }

  selectTopic(topicId: string) {
    this.questions$ = this.topicService.getTopicQuestions(topicId);
  }

  addQuestion(questionId: string) {
    this.examService.addQuestionToExam(this.examId, questionId).subscribe(() => {
      this.examQuestions$ = this.examService.getExamQuestions(this.examId);
    });
  }

  removeQuestion(questionId: string) {
    this.examService.removeQuestionFromExam(this.examId, questionId).subscribe(() => {
      this.examQuestions$ = this.examService.getExamQuestions(this.examId);
    })
  }

}
