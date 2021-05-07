import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/core/app-settings';

@Injectable({
  providedIn: 'root'
})
export class StudentExamService {
  private readonly baseUrl: string = AppSettings.API_ENDPOINT;
  
  constructor
  (
    private readonly http: HttpClient
  ) {}

  getStudentExamTeacher(studentExamId: any) {
    return this.http.get<any>(`${this.baseUrl}student-exams/${studentExamId}/teacher`);
  }

  getStudentExamStudent(studentExamId: any) {
    return this.http.get<any>(`${this.baseUrl}student-exams/${studentExamId}/student`);
  }

  getSubjectExamsOfStudent(subjectId: any) {
    return this.http.get<any>(`${this.baseUrl}student-exams/for-subject/${subjectId}`);
  }

}
