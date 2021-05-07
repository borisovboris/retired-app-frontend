import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/core/app-settings';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly baseUrl: string = AppSettings.API_ENDPOINT;
  constructor
  (
    private readonly http: HttpClient
  ) { }

  login(username: any, password: any) {
    return this.http.post<any>(`${this.baseUrl}auth/student-login`, { username, password });
  }

  register(data: any) {
    return this.http.post<any>(`${this.baseUrl}auth/student-register`, data);
  }

  searchStudent(criteria: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}students/search/${criteria}`);
  }

  addStudentToSubject(studentId: any, subjectId: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}students/add-student-to-subject`, {studentId, subjectId});
  }

  getSubjects() {
    return this.http.get<any>(`${this.baseUrl}students/subjects`);
  }

  removeStudentFromSubject(studentId: any, subjectId: any) {
    return this.http.delete<any>(`${this.baseUrl}students/${studentId}/remove-student-from-subject/${subjectId}`);
  }

  getSubjectExamsOfStudent(subjectId: any) {
    return this.http.get<any>(`${this.baseUrl}students/subject/${subjectId}/exams`);
  }
}
