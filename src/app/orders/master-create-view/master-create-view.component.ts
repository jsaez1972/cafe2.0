import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/_services/order.service';
import { Output, EventEmitter } from '@angular/core';

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

  constructor(
    private route: ActivatedRoute,
    public orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('idp'));
      console.log('cabecera' + this.id);
    });
  }

  onSubmit() {
    this.orderService.setActiveOrder(55);
    this.newOrderEvent.emit();
  }
}
