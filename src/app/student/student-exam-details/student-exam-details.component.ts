import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentExamService } from 'src/app/teacher/services/student-exam.service';
import { StudentQuestionService } from 'src/app/teacher/services/student-question.service';

@Component({
  selector: 'app-student-exam-details',
  templateUrl: './student-exam-details.component.html',
  styleUrls: ['./student-exam-details.component.css']
})
export class StudentExamDetailsComponent implements OnInit {

  studentExam$!: Observable<any>;
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
    this.studentExam$ = this.studentExamService.getStudentExamStudent(this.studentExamId);
  }

}
