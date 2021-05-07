import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/core/app-settings';

// provided in the providers array of SharedModule, not tree-shakable
@Injectable()

export class AuthService {

  private readonly baseUrl: string = AppSettings.API_ENDPOINT;

  constructor(private readonly http: HttpClient) { }

  checkUserOccupation() {
    return this.http.get<any>(`${this.baseUrl}auth/check-occupation`);
  }
}
