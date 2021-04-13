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
    return this.http.post(`${this.baseUrl}subjects`, subject);
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

  addTeacherToSubject(teacherId: number, subjectId: any) {
    return this.http.post<any>(`${this.baseUrl}subjects/add-teacher-to-subject`, { teacherId, subjectId});
  }

  removeTeacherFromSubject(teacherId: any, subjectId: any) {
    return this.http.delete(`${this.baseUrl}subjects/${subjectId}/remove-teacher-from-subject/${teacherId}`);
  }

  getSubjectStudents(subjectId: any) {
    return this.http.get(`${this.baseUrl}subjects/${subjectId}/students`);
  }
  
}
