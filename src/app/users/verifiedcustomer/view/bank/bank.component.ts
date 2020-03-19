import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {
  bankimages: any;
  bank: any;
  constructor() { }

  ngOnInit() {
    if (this.bankimages === undefined || this.bankimages === null || this.bankimages.length === 0) {
      this.bankimages = [];
    }
  }
  public addImage() {
    this.bankimages.push(null);
  }

  public processImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {
      let imageData = (readerEvent.target as any).result;
      this.bankimages.push(imageData);
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  removebImage(bank){
    this.bankimages.splice(bank, 1);
   
   }

}
