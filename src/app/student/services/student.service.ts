import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
