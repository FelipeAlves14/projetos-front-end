import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { AuthService } from '../auth.service';
import { AutoFocusModule } from 'primeng/autofocus';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    PanelModule,
    ButtonModule,
    PasswordModule,
    InputText,
    AutoFocusModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  router: Router = new Router();

  constructor(private authService: AuthService) {}

  myForm: FormGroup = new FormBuilder().group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  async login() {
    if (this.myForm.valid) {
      await this.authService.signin(
        this.myForm.get('username')?.value,
        this.myForm.get('password')?.value
      )
        .then((res: boolean) => {
          if (res) this.router.navigate(['/jogadores']);
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  }
}
