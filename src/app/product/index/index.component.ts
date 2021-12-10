import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  product: Product [] = [];;
  
  constructor(public productService: ProductService) { }
  
  ngOnInit(): void {
    this.getAllData();
    // this.productService.getAll().subscribe((data:Product[])=>{
    //   this.product = data;
    //   console.log(this.product);
    // })  
  }
  getAllData() {
    this.productService.getAll().subscribe(
      (data: any[]) => {
        this.product = data;
        console.log(this.product)
      },
      (error) => {
        console.error();
      }
    );
  }

  deleteProduct(id){
    this.productService.delete(id).subscribe(res => {
         this.product = this.product.filter(item => item.id !== id);
         console.log('Product deleted successfully!');
    })
  }

}
