import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CartNotificationService } from '../_services/cart-notification.service';
import { Router } from '@angular/router';
import { OrderService } from '../_services/order.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.scss'],
})
export class NavegationComponent implements OnInit {
  totalCart = 0;
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private cartNotifica: CartNotificationService,
    private router: Router,
    private orderService: OrderService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.cartNotifica.getValue().subscribe((val) => {
      this.totalCart = val;
    });
  }

  goCart() {
    this.router.navigate([
      '/orders/detail',
      this.orderService.getActiveOrder(),
    ]);
  }
}
