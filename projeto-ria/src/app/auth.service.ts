import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://account-backend.eastus.cloudapp.azure.com/login';
  private _user = signal<any>(null);

  constructor(private http: HttpClient) {}

  async signin(username: string, password: string): Promise<boolean> {
    return await lastValueFrom(
      this.http.post<{ token: string }>(this.apiUrl, { username, password })
    )
      .then((res: any): boolean => {
        if (res?.token) {
          localStorage.setItem('token', res.token);
          const decodedToken: any = jwtDecode<any>(res.token);
          this._user.set(decodedToken?.sub || username);
          return true;
        }
        return false;
      })
      .catch((): boolean => false);
  }

  logout() {
    localStorage.removeItem('token');
    this._user.set(null);
  }

  get user() {
    return this._user;
  }

  isAuthenticated() {
    return this._user() !== null;
  }

  authenticatedLogin(): string {
    const decodedToken: any = jwtDecode(localStorage.getItem('token')!);
    return decodedToken?.sub;
  }
}
