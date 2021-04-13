import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/core/app-settings';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private readonly baseUrl: string = AppSettings.API_ENDPOINT;;

  constructor(
    private readonly http: HttpClient
  ) { }

  createTopic(name: string, subjectId: any): Observable<any> {
    return this.http.post(`${this.baseUrl}topics/add`, { name, subjectId })
  }

  getTopicsOfSubject(subjectId: any) {
    return this.http.get(`${this.baseUrl}topics/${subjectId}`);
  }

  getTopics(topicId: any) {
    return this.http.get(`${this.baseUrl}topics/details/${topicId}`);
  }

  getTopicQuestions(topicId: any) {
    return this.http.get(`${this.baseUrl}topics/${topicId}/questions`)
  }
}
