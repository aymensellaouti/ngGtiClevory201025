import { Injectable } from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { LoginResponseDto } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { API } from '../../../config/api.config';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { CONSTANTES } from 'src/config/const.config';
import { Cv } from 'src/app/cv/model/cv';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject<ConnectedUser | null>(null); // flux eli traja3 ya connectedUser kan connecté sinon null
  isLoggedIn$: Observable<boolean> = this.user$.pipe(map((user) => !!user));
  isLoggedOut$: Observable<boolean> = this.user$.pipe(map((user) => !user));
  constructor(private http: HttpClient) {
    const user = localStorage.getItem(CONSTANTES.connectedUser);
    if(user) {
      this.user$.next(JSON.parse(user));
    }
  }

  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API.login, credentials).pipe(
      tap(response => {
        const user: ConnectedUser = {
          id: response.userId,
          email: credentials.email
        };
        this.user$.next(user);
        localStorage.setItem(CONSTANTES.connectedUser, JSON.stringify(user));
        this.saveToken(response.id);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    this.user$.next(null);
    localStorage.removeItem(CONSTANTES.connectedUser);
    this.removeToken();
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
