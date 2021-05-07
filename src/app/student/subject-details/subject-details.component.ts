import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentExamService } from 'src/app/teacher/services/student-exam.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.css']
})
export class SubjectDetailsComponent implements OnInit {
  subjectId: string | null;
  studentExams$!: Observable<any>;

  constructor
  (
    private readonly studentExamService: StudentExamService,
    private readonly studentService: StudentService,
    private readonly route: ActivatedRoute
  ) { 
    this.subjectId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.studentExams$ = this.studentService.getSubjectExamsOfStudent(this.subjectId);
  }

}
