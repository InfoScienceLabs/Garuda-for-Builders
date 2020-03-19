import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.scss']
})
export class KycComponent implements OnInit {
  images: any;
  docimages:any;
  hello: any;
  doc:any;
  constructor() { }

  ngOnInit() {
    if (this.images === undefined || this.images === null || this.images.length === 0) {
      this.images = [];
    }
    if (this.docimages === undefined || this.docimages === null || this.docimages.length === 0) {
      this.docimages = [];
    }
  }
  public addImage() {
    this.images.push(null);
  }

  public processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {
      let imageData = (readerEvent.target as any).result;
      this.images.push(imageData);
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  public procesdocImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {
      let imagesData = (readerEvent.target as any).result;
      this.docimages.push(imagesData);
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  removeImage(hello){
    this.images.splice(hello, 1);
   
   }
   removedocImage(doc){
    this.docimages.splice(doc, 1);
   }
}
