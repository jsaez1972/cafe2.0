import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/_services/auth.service';
import { CartNotificationService } from 'src/app/_services/cart-notification.service';
import { OrderService } from 'src/app/_services/order.service';

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

  constructor(
    private jwtHelper: JwtHelperService,
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService,
    private cartNotifica: CartNotificationService
  ) {}

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    let loginData = {
      username: this.loginForm.get('userName')?.value,
      password: this.loginForm.get('password')?.value,
    };

    this.authService.authenticateUser(loginData).subscribe((result) => {
      this.authService.setToken(JSON.stringify(result.token));
      this.checkNotificaTotalOrder();
      this.router.navigate(['/public/products']);
    });
  }

  checkNotificaTotalOrder() {
    if (this.orderService.getActiveOrder() > 0) {
      let idorden = this.orderService.getActiveOrder();
      this.orderService.getPorId(idorden).subscribe((order) => {
        this.cartNotifica.setValue(order.total);
      });
    }
  }
}
