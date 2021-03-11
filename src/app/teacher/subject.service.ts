import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from '../core/models/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  readonly baseUrl: string = 'http://localhost:3000/subjects';

  constructor(private http: HttpClient) {}

  getAllSubjects() {
    return this.http.get(this.baseUrl);
  }

  createSubject(subject: Subject) {
    return this.http.post(this.baseUrl, subject);
  }
  
}
