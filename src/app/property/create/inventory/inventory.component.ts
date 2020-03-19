import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  public show:boolean = false;
  public show_second:boolean = false;
  public showmain:boolean = false;
  public showinstall:boolean=false;
  public showdiscount:boolean=false;
  public showroi:boolean=false;
  public showresale:boolean=false;
  public buttonName:any = 'Show';
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
  toggleaprmnt(){
    this.showmain = !this.showmain;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.showmain)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  toggleinstall(){
    this.showinstall = !this.showinstall;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.showinstall)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  togglediscount(){
    this.showdiscount = !this.showdiscount;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.showdiscount)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  toggleroi(){
    this.showroi = !this.showroi;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.showroi)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  toggleresale(){
    this.showresale = !this.showresale;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.showresale)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  ngOnInit() {
  }


}
