import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { StudentExamService } from '../../services/student-exam.service';
import { StudentQuestionService } from '../../services/student-question.service';

@Component({
  selector: 'app-student-exam-details',
  templateUrl: './student-exam-details.component.html',
  styleUrls: ['./student-exam-details.component.css']
})
export class StudentExamDetailsComponent implements OnInit, OnDestroy {

  studentExamSubscription!: Subscription;
  studentExam: any;
  studentExamId: string | null;

  constructor
  (
    private readonly studentExamService: StudentExamService,
    private readonly studentQuestionService: StudentQuestionService,
    private readonly route: ActivatedRoute
  ) {
    this.studentExamId = this.route.snapshot.paramMap.get('student-exam-id');
  }

  ngOnInit(): void {
    this.studentExamSubscription = this.studentExamService.getStudentExamTeacher(this.studentExamId)
    .subscribe((studentExam) => {
      this.studentExam = studentExam;
    });
  }
  
  assessOpenQuestion(event: any, questionId: string) {
    const earnedPoints = event.target.value;
    this.studentQuestionService.assessOpenQuestion(earnedPoints, questionId).subscribe(() => {
      
    });
  }

  ngOnDestroy() {
    this.studentExamSubscription.unsubscribe();
  }

}
