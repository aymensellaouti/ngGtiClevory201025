import { Injectable } from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { LoginResponseDto } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { API } from '../../../config/api.config';
import { Observable } from 'rxjs';
import { CONSTANTES } from 'src/config/const.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  user$ // flux eli traja3 ya connectedUser kan connecté sinon null
  isLoggedIn$!: Observable<boolean>;
  isLoggedOut!: Observable<boolean>;
  constructor(private http: HttpClient) {}

  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API.login, credentials);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
  saveToken(token: string) {
    localStorage.setItem(CONSTANTES.token, token);
  }

  getToken(): string {
    return localStorage.getItem(CONSTANTES.token) ?? '';
  }

  removeToken() {
    localStorage.removeItem(CONSTANTES.token);
  }
}

export class ConnectedUser {
  constructor(public id: number, public email: string) {}
}
