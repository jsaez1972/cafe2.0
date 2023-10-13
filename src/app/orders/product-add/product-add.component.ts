import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/_services/order.service';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  nameProduct: string = '';
  priceProduct: number = 0;
  id: number = 0;
  orderExist: boolean = false;

  private fb = inject(FormBuilder);
  form = this.fb.group({
    quantity: [null, Validators.required],
  });

  constructor(
    private route: ActivatedRoute,
    private prodService: ProductsService,
    public orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.orderExist = this.orderService.getActiveOrder() > 0;

    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('idp'));
      this.loadProduct(this.id);
    });
  }

  loadProduct(id: number) {
    this.prodService.getPorId(id).subscribe((x) => {
      this.nameProduct = x.name;
      this.priceProduct = x.unitPrice;
    });
  }

  orderCreated() {
    this.orderExist = true;
  }

  onSubmit() {
    this.router.navigate(['/public/products']);
  }
}
