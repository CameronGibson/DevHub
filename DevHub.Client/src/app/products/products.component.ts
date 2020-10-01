import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product-services/product.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  public productId: number = 15;
  public productDescription: string = "";
  public productName: string = "";
  public productPrice: number = 0.00;
  public productImage: any;
  public authorName: string = this.getAuthorName();
  public productIsEndorsed: boolean = false;
  public imageUrl: any;


  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService, public openDialogRef: MatDialogRef<PublishContentDialog>){
      this.product = new Product();
    }

  //save the data to the db.  
  onSubmit(): void {
    //buid up Product with user input.
    this.product = { 
      'id': this.productId,
      'modelName': this.productName,
      'modelDescription': this.productDescription,
      'modelPrice': this.productPrice,
      'modelImage': this.productImage,
      'modelIsEndorsed': this.productIsEndorsed,
      'authorName': this.authorName};
    this.productService.save(this.product).subscribe( productToBePosted => this.product = productToBePosted);
    this.onCancelClick();
  }

  //re-route to the product page.
  returnToProducts(): void {
    this.router.navigate(['http://localhost:4200/products']);
  }

  //close the import content dialog.
  onCancelClick(): void {
    this.openDialogRef.close();
  }

  //retrieve the author name dynamically, depending on who is logged in.
  getAuthorName(): string {
    //for now, this just passes back a hard coded name.
    return "Cameron Gibson";
  }

  //show the image that has been selected.
  showSelectedImage(event): void {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imageUrl = event.target.result;
      }
  }
}
}
