import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/core/app-settings';
import { Subject } from '../../core/models/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private readonly baseUrl: string = AppSettings.API_ENDPOINT;

  constructor(
    private readonly http: HttpClient,
    private readonly route: ActivatedRoute
    ) {}

  createSubject(subject: Subject) {
    return this.http.post(this.baseUrl, subject);
  }

  getSubject(subjectId: any) {
    return this.http.get(`${this.baseUrl}subjects/${subjectId}`);
  }

  getSubjectTeachers(subjectId: any) {
    return this.http.get(`${this.baseUrl}subjects/${subjectId}/teachers`);
  }

  getSubjectTopics(subjectId: any) {
    return this.http.get(`${this.baseUrl}subjects/${subjectId}/topics`);
  }

  getSubjectStudents(subjectId: any) {
    return this.http.get(`${this.baseUrl}subjects/${subjectId}/students`);
  }
  
}
