import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from 'src/app/student/services/student.service';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students$!: Observable<any>;
  subject$!: Observable<any>;
  subjectId: string | null;

  constructor
  (
    private readonly subjectService: SubjectService,
    private readonly studentService: StudentService,
    private readonly route: ActivatedRoute,
  ) { 
    this.subjectId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.subject$ = this.subjectService.getSubject(this.subjectId);
    this.students$ = this.subjectService.getSubjectStudents(this.subjectId);
  }

  removeStudent(studentId: string) {
    this.studentService.removeStudentFromSubject(studentId, this.subjectId).subscribe(() => {
      this.refreshStudents();
    });

  }

  refreshStudents() {
    this.students$ = this.subjectService.getSubjectStudents(this.subjectId);
  }

}
