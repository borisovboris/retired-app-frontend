import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/core/app-settings';


@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private readonly baseUrl: string = AppSettings.API_ENDPOINT;

  constructor(private readonly http: HttpClient) { }

  createExam(name: string) {
    return this.http.post<any>(`${this.baseUrl}exams`, { name });
  }
  //knows the id of the subject because it is attached to the request headers
  getExams() {
    return this.http.get<any>(`${this.baseUrl}exams`);
  }

  getExam(examId: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}exams/${examId}`);
  }

  addQuestionToExam(examId: any, questionId: string) {
    return this.http.post<any>(`${this.baseUrl}exams/add-question`, { examId, questionId });
  }

  getExamQuestions(examId: any) {
    return this.http.get<any>(`${this.baseUrl}exams/${examId}/questions`);
  }

  removeQuestionFromExam(examId: any, questionId: string) {
    return this.http.delete<any>(`${this.baseUrl}exams/${examId}/delete-question/${questionId}`);
  }
}
