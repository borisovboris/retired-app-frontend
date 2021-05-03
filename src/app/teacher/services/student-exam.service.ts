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

  getStudentExam(studentExamId: any) {
    return this.http.get<any>(`${this.baseUrl}student-exams/${studentExamId}/teacher`);
  }
}
