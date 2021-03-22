import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ExamService {
  readonly baseUrl = "http://localhost:3000";

  constructor(private readonly http: HttpClient) { }

  createExam(name: string) {
    return this.http.post<any>(`${this.baseUrl}/exams`, { name });
  }

  getExams() {
    return this.http.get<any>(`${this.baseUrl}/exams`);
  }
}
