import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../core/models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  readonly baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  register(username: string, email: string, password: string) {
    const teacher: Teacher = { username, email, password };
    return this.http.post<any>('http://localhost:3000/auth/teacher-register', teacher);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:3000/auth/teacher-login', { username, password });
  }
  
}
