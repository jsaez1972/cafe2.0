import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  loginForm = this.fb.group({
    userName: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    let loginData = {
      email: this.loginForm.get('userName')?.value,
      password: this.loginForm.get('password')?.value,
    };

    console.log(loginData);

    this.authService.authenticateUser(loginData).subscribe((result) => {
      console.log(result?.token);

      localStorage.setItem('access_token', JSON.stringify(result?.token));
      this.router.navigate(['/public/products']);
    });
  }
}
