import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/core/app-settings';

@Injectable({
  providedIn: 'root'
})
export class StudentQuestionService {

  private readonly baseUrl: string = AppSettings.API_ENDPOINT;
  
  constructor
  (
    private readonly http: HttpClient
  ) {}

  assessOpenQuestion(earnedPoints: string, questionId: string) {
    return this.http.post<any>(`${this.baseUrl}student-questions/assess`, { earnedPoints, questionId });
  }
  
}
