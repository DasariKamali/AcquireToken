// src/app/sso/sso.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sso',
  templateUrl: './sso.component.html',
  styleUrls: ['./sso.component.css'],
})
export class SsoComponent {
  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }

  async getToken() {
    try {
      const tokenResponse = await this.authService.acquireTokenSilent(['openid', 'profile', 'User.Read']);
      console.log('Access Token:', tokenResponse.accessToken);
    } catch (error) {
      console.error('Error acquiring token silently:', error);
    }
  }
}
