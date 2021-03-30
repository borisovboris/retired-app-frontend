import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  subjects$!: Observable<any>;

  constructor
  (
    private readonly studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.subjects$ = this.studentService.getSubjects();
  }

}
