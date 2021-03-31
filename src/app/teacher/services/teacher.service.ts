import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/core/app-settings';
import { Teacher } from 'src/app/core/models/teacher.model';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private readonly baseUrl: string = AppSettings.API_ENDPOINT;

  constructor(private http: HttpClient) {}

  register(teacher: Teacher) {
    return this.http.post<any>(`${this.baseUrl}auth/teacher-register`, teacher);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}auth/teacher-login`, { username, password });
  }

  searchTeacher(criteria: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}teachers/search/` + criteria);
  }

  addTeacherToSubject(teacherId: number, subjectId: any) {
    return this.http.post<any>(`${this.baseUrl}teachers/add-teacher-to-subject`, { teacherId, subjectId});
  }

  getAllSubjects() {
    return this.http.get(`${this.baseUrl}teachers/subjects`);
  }
  
}
