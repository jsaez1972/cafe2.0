import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  nameProduct: string = '';
  id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private prodService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id =Number( params.get('idp'));
      this.loadProduct(this.id);
    });
  }

  loadProduct(id: number) {
    this.prodService.getPorId(id).subscribe((x) => {
      this.nameProduct = x.name;
    });
  }

}
