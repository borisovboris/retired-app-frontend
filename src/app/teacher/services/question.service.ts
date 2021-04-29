import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/core/app-settings';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private readonly baseUrl: string = AppSettings.API_ENDPOINT;

  constructor
  (
    private readonly http: HttpClient
  ) { }

  createQuestion(question: any) {
    //topicId included in question object
    console.log(question);
    return this.http.post(`${this.baseUrl}questions`, question);
  }

  getQuestionChoices(questionId: number) {
    return this.http.get(`${this.baseUrl}questions/${questionId}/choices`);
  }

}
