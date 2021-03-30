import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from '../../core/models/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  readonly baseUrl: string = 'http://localhost:3000/subjects';

  constructor(
    private readonly http: HttpClient,
    private readonly route: ActivatedRoute
    ) {}

  getCurrentURLSubject(): Observable<any> {
    const subjectId = this.route.snapshot.paramMap.get('id');
    const subject$ = this.getSubject(subjectId);
    return subject$;
  }

  createSubject(subject: Subject) {
    return this.http.post(this.baseUrl, subject);
  }

  getSubject(subjectId: any) {
    return this.http.get(this.baseUrl + '/' + subjectId);
  }

  getSubjectTeachers(subjectId: any) {
    return this.http.get(this.baseUrl + '/' + subjectId + '/teachers');
  }

  getSubjectTopics(subjectId: any) {
    return this.http.get(this.baseUrl + '/' + subjectId + '/topics');
  }

  getSubjectStudents(subjectId: any) {
    return this.http.get(this.baseUrl + '/' + subjectId + '/students');
  }
  
}
