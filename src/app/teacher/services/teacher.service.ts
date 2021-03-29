import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from 'src/app/core/models/teacher.model';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  readonly baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  register(teacher: Teacher) {
    return this.http.post<any>('http://localhost:3000/auth/teacher-register', teacher);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:3000/auth/teacher-login', { username, password });
  }

  searchTeacher(criteria: string): Observable<any> {
    return this.http.get<any>('http://localhost:3000/teachers/search/' + criteria);
  }

  addTeacherToSubject(teacherId: number, subjectId: any) {
    return this.http.post<any>('http://localhost:3000/teachers/add-teacher-to-subject', { teacherId, subjectId});
  }

  getAllSubjects() {
    return this.http.get(`${this.baseUrl}/teachers/subjects`);
  }
  
}
