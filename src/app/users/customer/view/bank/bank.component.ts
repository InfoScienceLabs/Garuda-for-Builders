import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {
  images: any;
  hello: any;
  constructor() { }

  ngOnInit() {
    if (this.images === undefined || this.images === null || this.images.length === 0) {
      this.images = [];
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
  removeImage(hello){
    this.images.splice(hello, 1);
   
   }

}
