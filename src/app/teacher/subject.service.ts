import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  readonly baseUrl: string = 'http://localhost:3000/subjects';

  constructor(private http: HttpClient) { 
    console.log("constructor");
  }

  getAllSubjects(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.baseUrl);
  }
}
