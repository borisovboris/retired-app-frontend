import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly baseUrl = 'http://localhost:3000';
  constructor
  (
    private readonly http: HttpClient
  ) { }

  login(username: any, password: any) {
    return this.http.post<any>(`${this.baseUrl}/auth/student-login`, { username, password });
  }

  register(data: any) {
    return this.http.post<any>(`${this.baseUrl}/auth/student-register`, data);
  }

  searchStudent(criteria: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/students/search/${criteria}`);
  }

  addStudentToSubject(studentId: any, subjectId: any) {
    return this.http.post<any>(`${this.baseUrl}/students/add-student-to-subject`, {studentId, subjectId});
  }

  getSubjects() {
    return this.http.get<any>(`${this.baseUrl}/students/subjects`);
  }
}
