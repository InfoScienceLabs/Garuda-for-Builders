import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;
  images: any;
  docimages:any;
  hello: any;
  doc:any;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    if (this.images === undefined || this.images === null || this.images.length === 0) {
      this.images = [];
    }
    if (this.docimages === undefined || this.docimages === null || this.docimages.length === 0) {
      this.docimages = [];
    }
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
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
