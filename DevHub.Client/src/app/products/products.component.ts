import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product-services/product.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  providers: [ProductService],
  styleUrls: ['./products.component.scss'],
})

//will eventually be getting this data from a db.
export class ProductsComponent implements OnInit {
  public productList: Product[] = [];
  public isEndorsed: boolean = false;
  public showEndorsedContentOnly: boolean = false;
  public intialProductList = this.productList;

  constructor(public productService: ProductService, public publishContentDialog: MatDialog) { }

  //retrieve data from the http request to the backend.
  ngOnInit(): void {
    this.productService.findAll().subscribe(data => {     
      data.forEach(element => {
        this.productList.push(element);
      });
    });
  }

  getProductCount(): number {
    let count = this.productList.length;
    return count;
  }

  filterEndorsedContent(): void {
    this.showEndorsedContentOnly = !this.showEndorsedContentOnly;
    this.getEndorsedContent();
  }

  getEndorsedContent(): Product[] {
    if (this.showEndorsedContentOnly) {
      var endorsedList: Product[] = [];
      this.productList.forEach(product => {
        if (product.modelIsEndorsed) {
          endorsedList.push(product);
        }
      });
      this.productList = endorsedList;
      return this.productList;
    }
    this.productList = this.intialProductList;
    return this.productList;
  }

  //Dialog related code.
  openDialog() {
    const publishContentDialogRef = this.publishContentDialog.open(PublishContentDialog);

    publishContentDialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
  });
}
}

//Component for the publish content dialog.
@Component({
  selector: 'publish-content-dialog',
  templateUrl: 'publish-content-dialog.html',
  styleUrls: ['./products.component.scss'],
})
export class PublishContentDialog {

  public product: Product;
  public filename: string = "No Image Selected";


  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService, public openDialogRef: MatDialogRef<PublishContentDialog>){
      this.product = new Product();
    }

  onSubmit(): void {
    this.productService.save(this.product).subscribe(result => this.returnToProducts());
  }

  returnToProducts(): void {
    this.router.navigate(['http://localhost:4200/products']);
  }

  onCancelClick(): void {
    this.openDialogRef.close();
  }

  importContent(): void {
    //handle the data
    this.onCancelClick();
  }

  /*
  getImage(input): void {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#product-image')
          .attr('src', e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  */
}
