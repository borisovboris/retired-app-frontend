import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../core/models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  readonly baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  create(username: string, email: string, password: string) {
    const teacher: Teacher = { username, email, password };
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.post<String>('http://localhost:3000/auth/teacher-register', teacher, { headers });
  }
  
}
