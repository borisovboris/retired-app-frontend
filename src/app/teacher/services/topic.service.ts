import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  baseUrl = "http://localhost:3000";

  constructor(
    private readonly http: HttpClient
  ) { }

  createTopic(name: string, subjectId: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/topics/add`, { name, subjectId })
  }

  getTopicsOfSubject(subjectId: any) {
    return this.http.get(`${this.baseUrl}/topics/${subjectId}`);
  }
}
