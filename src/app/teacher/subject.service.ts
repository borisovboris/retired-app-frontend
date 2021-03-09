import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  readonly baseUrl: string = 'http://localhost:3000/subjects';

  constructor(private http: HttpClient) {}

  getAllSubjects(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.baseUrl);
  }

  createSubject(name: string) {
    return this.http.post(this.baseUrl, { name }).subscribe(data => {
      console.log(data);
    });
  }
  
}
