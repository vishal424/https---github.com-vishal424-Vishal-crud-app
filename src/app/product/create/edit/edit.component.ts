import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  unique: number;
  product: Product[] = [];;
  form: FormGroup;

 
  
  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.unique = this.route.snapshot.params['productId'];
    this.productService.find(this.unique).subscribe((data: Product[])=>{
      this.product = data;
    });
    
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }
   
  get f(){
    return this.form.controls;
  }
     
  submit(){
    console.log(this.form.value);
    this.productService.update(this.unique, this.form.value).subscribe(res => {
         console.log('Product updated successfully!');
         this.router.navigateByUrl('product/index');
    })
  }

}
