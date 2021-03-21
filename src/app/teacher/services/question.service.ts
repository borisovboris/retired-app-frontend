import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  readonly baseUrl = "http://localhost:3000";

  constructor
  (
    private readonly http: HttpClient
  ) { }

  createQuestion(question: any) {
    return this.http.post(`${this.baseUrl}/questions`, question);
  }

  getQuestionAnswers(questionId: number) {
    return this.http.get(`${this.baseUrl}/questions/answers/${questionId}`);
  }

}
