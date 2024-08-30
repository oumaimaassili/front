import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AuthenticationRequest, AuthenticationResponse } from '../modeles/user';
interface RegisterRequest {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}



@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private apiUrl = 'http://localhost:8081/api/v1/authenticate';  // URL de votre backend


  // login(credentials: { Email: string, Password: string }): Observable<any> {
  //   return this.httpClient.post<any>('http://localhost:8081/api/v1/authenticate', credentials);
  // }
  constructor(private http: HttpClient) { }

  login(request: AuthenticationRequest): Observable<AuthenticationResponse> {
    console.log("fffffffff")

    return this.http.post<AuthenticationResponse>(this.apiUrl, request);
  }

  register(request: RegisterRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`http://localhost:8081/api/v1/register`, request);
  }
  // register(userData: { firstName: string, lastName: string, email: string, password: string, role: string }): Observable<any> {
  //   return this.http.post<any>('http://localhost:8081/api/v1/register', userData);
  // }
}