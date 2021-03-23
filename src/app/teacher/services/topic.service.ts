import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  readonly baseUrl = "http://localhost:3000";

  constructor(
    private readonly http: HttpClient
  ) { }

  createTopic(name: string, subjectId: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/topics/add`, { name, subjectId })
  }

  getTopicsOfSubject(subjectId: any) {
    return this.http.get(`${this.baseUrl}/topics/${subjectId}`);
  }

  getTopics(topicId: any) {
    return this.http.get(`${this.baseUrl}/topics/details/${topicId}`);
  }

  getTopicQuestions(topicId: any) {
    return this.http.get(`${this.baseUrl}/topics/${topicId}/questions`)
  }
}