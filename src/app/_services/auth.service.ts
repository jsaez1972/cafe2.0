import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  basePath = environment.apiUrl + 'api/Login';
  constructor(private jwtHelper: JwtHelperService, private http: HttpClient) {}

  authenticateUser(loginData: any): Observable<any> {
    return this.http.post<any>(this.basePath, loginData);
  }

  getToken() {
    const token = localStorage.getItem('access_token');
    return token;
  }

  public isAuthenticated(): boolean {
    let token = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
