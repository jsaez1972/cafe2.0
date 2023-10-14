import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/_services/order.service';
import { Output, EventEmitter } from '@angular/core';
import { OrderCreate } from 'src/app/_interfaces/order-create';

@Component({
  selector: 'app-master-create-view',
  templateUrl: './master-create-view.component.html',
  styleUrls: ['./master-create-view.component.scss'],
})
export class MasterCreateViewComponent implements OnInit {
  @Output() newOrderEvent = new EventEmitter<null>();

  id: number = 0;
  mesa: string = '';
  obs: string = '';

  private fb = inject(FormBuilder);
  form = this.fb.group({
    mesa: [null, Validators.required],
    obs: [null],
  });

  constructor(public orderService: OrderService) {}

  ngOnInit(): void {
    let ido = this.orderService.getActiveOrder();
    if (ido > 0) this.loadOrder(ido);
  }

  onSubmit() {
    let order: OrderCreate = {
      idVendor: 1,
      tableNumber: Number(this.form.get('mesa')?.value),
      comments: this.form.get('obs')?.value!,
    };

    this.orderService.create(order).subscribe((idorder) => {
      this.loadOrder(idorder);
      this.orderService.setActiveOrder(idorder);
      this.newOrderEvent.emit();
    });
  }

  loadOrder(idorder: number) {
    this.orderService.getPorId(idorder).subscribe((order) => {
      this.mesa = order.tableNumber.toString();
      this.obs = order.comments;
    });
  }
}
