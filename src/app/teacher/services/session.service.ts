import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/core/app-settings';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly baseUrl: string = AppSettings.API_ENDPOINT;

  constructor(private readonly http: HttpClient) { }

  createSession(data: any): Observable<any> {
    console.log(data);
    return this.http.post<any>(`${this.baseUrl}sessions/add`, data);
  }

  getSession(sessionId: any) {
   return this.http.get<any>(`${this.baseUrl}sessions/${sessionId}`);
  }
}
