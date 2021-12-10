import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id: number;
  product: Product[] = [];

 
   
  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['productId'];
      
    this.productService.getAll().subscribe((data: Product[])=>{
      debugger
      this.product = data;
      console.log(this.product)
    });
  }


}
