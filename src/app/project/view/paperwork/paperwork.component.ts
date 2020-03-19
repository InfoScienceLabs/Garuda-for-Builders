import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paperwork',
  templateUrl: './paperwork.component.html',
  styleUrls: ['./paperwork.component.scss']
})
export class PaperworkComponent implements OnInit {
  public show:boolean = false;
  public show_second:boolean = false;
  public showmain:boolean = false;
  public buttonName:any = 'Show';
  images: any;
  docimages:any;
  hello: any;
  doc:any;
  panelOpenState = false;
  constructor() { }
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  toggle_second(){
    this.show_second = !this.show_second;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show_second)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  togglemain(){
    this.showmain = !this.showmain;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.showmain)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  ngOnInit() {
    if (this.images === undefined || this.images === null || this.images.length === 0) {
      this.images = [];
    }
    if (this.docimages === undefined || this.docimages === null || this.docimages.length === 0) {
      this.docimages = [];
    }
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
