import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router'
@Component({
  selector: 'app-produtc-create',
  templateUrl: './produtc-create.component.html',
  styleUrls: ['./produtc-create.component.css']
})
export class ProdutcCreateComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
   
  }
createProduct(): void{
  this.productService.showMessage('Produto Criado!')
}
cancel(): void{
  this.router.navigate(['/products'])
}
}
