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
    console.log(this.productList);
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
        if (product.is_endorsed) {
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
  public productId: number = 17;
  public productDescription: string = "";
  public productName: string = "";
  public productPrice: number = 0.00;

  /*Not being used for anything rn. Am using imageUrl as the image attribute since it is in base64.
  I believe i need to remove pieces of the string before i send it to the server since ':' is not a recognizable
  base64 character. Maybe then i can convert it to byte[].
  */
  public productImage: any;

  public authorName: string = "Cameron Gibson"; 
  public productIsEndorsed: boolean = false;
  public imageUrl: any;
  public productListForDialog: Product[] = [];

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    public openDialogRef: MatDialogRef<PublishContentDialog>) {
    this.product = new Product();
  }

  //save the data to the db.  
  onSubmit(): void {
    this.productName = this.titleCaseFormatter(this.productName);
    this.productDescription = this.stringFormatter(this.productDescription);
    this.authorName = this.titleCaseFormatter(this.authorName);
    this.product = {
      'Id': this.productId,
      'model_name': this.productName,
      'model_description': this.productDescription,
      'model_price': this.productPrice,
      'model_image': this.imageUrl, /*<-- base64*/
      'is_endorsed': this.productIsEndorsed,
      'publisher_name': this.authorName
    };

    this.productService.save(this.product).subscribe(productToBePosted => this.product = productToBePosted);
    this.onCancelClick();
  }

  titleCaseFormatter(str: string): string {
    var splitString = str.split(' ');
    for (var i = 0; i < splitString.length; i++) {
      splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
    }
    return splitString.join(' ');
  }

  stringFormatter(str: string): string {
    var firstLetter = str.charAt(0).toUpperCase();
    return firstLetter.concat(str.slice(1, str.length).toLowerCase());
  }

  //close the import content dialog.
  onCancelClick(): void {
    this.openDialogRef.close();
  }

  //show the image that has been selected.
  onFileSelected(event): void {
    this.productImage = <File>event.target.files[0].name;
    //display the selected image in the form dialog.
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => { 
        this.imageUrl = event.target.result;   //returning this string is a base64
      }
    }
  }
}
