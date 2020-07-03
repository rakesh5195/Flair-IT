import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ProductsService } from '../../../../services/products.service';
import { Product } from '../../../../../../models/product.model';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, timeInterval } from 'rxjs/operators';
import { FormsService } from "../../../../../../services/form-service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productForm: FormGroup;
  isEditMode: boolean = false;
  currentProduct: any = {};
  currentProductId: any;
  private state$: any;
  constructor(private _ngToastService: ToastrService,public formService:FormsService, private formBuilder: FormBuilder, private productService: ProductsService, private router: Router, private activatedRouterService: ActivatedRoute) {
  }

  ngOnInit() {

    this.productForm = this.formBuilder.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
      type: ["", Validators.required],
      color: ["", Validators.required],
      stock_unit: [0, [Validators.required]],
      sku: ["", Validators.required],
      addon: ["", Validators.required]
    })

    console.log(this.currentProduct)
    if (this.activatedRouterService.snapshot.params.id) {
      this.productService.getDataById(this.activatedRouterService.snapshot.params.id)
      console.log(this.productService.currentProduct);
      setTimeout(() => {
        this.productForm.setValue(this.productService.currentProduct);
        this.isEditMode = true;
      }, 500);

    }

    // this.createProduct();
    // if (this.currentProduct && !this.currentProduct.id) {
    //   console.log("###########################################")
    //   this.createProduct();
    // } else {
    //   console.log("3333333333333333333333333333333333333333333")
    //   this.productForm.setValue(this.currentProduct);
    //   this.updateProduct(this.currentProduct);
    // }
  }


  // editProduct(product: Product) {
  //   this.productService.currentProduct = Object.assign({}, product);
  //   // this.toastrService.warning('Product edited successfully !', 'Product CRUD');
  // }

  createProduct() {
    this.productService.createProduct(this.productForm.value).subscribe(
      (result: Product) => {
        this.productService.getAllProduct();
        this._ngToastService.success("Product created successfully!");
        this.clearProduct();
        this.router.navigate(["/pages/products"])
      });
  }

  updateProduct() {
    this.productService.updateProduct(this.productForm.value).subscribe(
      (result: Product) => {
        this.productService.getAllProduct();
        // this.toastrService.info('Product updated successfully !', 'Product CRUD');
        this.clearProduct();
        this.isEditMode = false;
        this._ngToastService.success("Product updated successfully!");
        this.router.navigate(["/pages/products"])
      });
  }

  clearProduct() {
    this.productForm.reset();
  }



}
