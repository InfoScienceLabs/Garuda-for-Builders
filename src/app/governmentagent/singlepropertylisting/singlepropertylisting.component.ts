import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Property, Owner, Address, User } from '../../models/models';
import { ActivatedRoute } from '@angular/router';
import { PropertyService,ImageService, UserService } from '../../services/services';
import { ControlContainer, NgForm } from '@angular/forms';
import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { MatSnackBar } from "@angular/material";
import { MatRadioModule } from '@angular/material/radio';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { Type } from '../../models/property';

import { isObject, isString } from "util";



@Component({
  selector: 'app-singlepropertylisting',
  templateUrl: './singlepropertylisting.component.html',
  styleUrls: ['./singlepropertylisting.component.scss']
})
export class SinglepropertylistingComponent implements OnInit {

  displayedColumns = ['select', 'status' ];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);
 selectedEntry;
 onSelectionChange(entry) {
        this.property.status = entry.status;
        console.log(this.property.status);
    }

  panelOpenState = false;
  current_date: Date;
  currentUser: any;
  startDate: Date;
  isNew: boolean;
  loading  : boolean;
  readOnly : boolean;
  checked: Boolean;
  imageData :[];
  constructor(private propertyService: PropertyService, private snackBar: MatSnackBar,
    private route: ActivatedRoute, private userService: UserService, private imageService: ImageService, private MatRadioModule:MatRadioModule) { 
      this.loading = false;
    this.current_date = new Date();
    this.startDate = new Date(1990, 0, 1);
    }
    public property: Property;
    isLinear = false;
  ngOnInit() {
    this.disable_stake = false;
    this.property = new Property();
    this.property.owner = [];
    this.readOnly = true;
    // this.property.owner.push(new Owner());
    this.property.address = new Address();
    this.property.image = [];
    this.property.docs = [];
    this.property.location = [];
    this.userArray = [];
    // this.currentUser = this.authService.currentUser;
    // this.property.owner.forEach(element =>{
    //   element.OwnerName = this.currentUser['name'];
    //   console.log(this.currentUser['name']);
    // });
    this.route.url.subscribe(data => {
      if (data[0] && data[0].path === 'create') {
        this.isNew = true;
        this.property.image = [];
      }
      else {
        this.isNew = false; 
        this.property.propertyId = data[1].path;
        this.property.id = data[2].path;
        
        console.log(this.property);
        this.propertyService.getPropertyByID(this.property.propertyId).subscribe((data : Property)=>{
          this.property = data;
        }, (err : HttpErrorResponse) => {
          
        });
        this.propertyService.getListingById(this.property.id).subscribe((data: Property) => {
          this.property.id = data.id;
          this.property.seller[0] = data.seller[0];
          this.property.buyer[0]  = data.buyer[0];
        }, (err: HttpErrorResponse) => {
          //this.error =  err.error['message'];
        });
      }
    });
    
  }



  userArray : User[];
  searchUser(event){
    if(event.length > 2)
    this.userService.searchUserByKeyword(event).subscribe((response: User[])=>{
      this.userArray = response;
    });
  }
  disable_stake : boolean;
  staticValueForStake(i,type){
    if(type === 'Sole propertiership'){
      this.property.owner[i].stake = 100;
      this.disable_stake = true;
    }
  }
  selectedFile: ImageSnippet;

  processWebImage(imageInput: any) {

    console.log(imageInput);
    const file: File = imageInput.target.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      console.log(event);
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          this.property.image.push(res['url']);
        },
        (err) => {
          console.log(err);
        })
    });

    reader.readAsDataURL(file);
  }
  remove(index: number){
    this.property.image.splice(index,1);
  }
  length= 0;
  countingCharacters(event) {
    this.length = event.length;
  }

  propertyconfirmstatus() {
    console.log(this.property.status);
    this.property.type = Type['Buy'];
    console.log(this.property.type);
    
    if(!this.property.message) this.property.message = 'approved';
    var confirm = {id : this.property.id, propertyId : this.property.propertyId, status: this.property.status, message: this.property.message, type: this.property.type};
    console.log("111111111");
    console.log(confirm);
    this.propertyService.propertyconfirmstatus(this.property.id, confirm).subscribe(data => {
      this.snackBar.open("Updated", "Close", {
        duration: 2000,
        panelClass: ["success"],
        verticalPosition: 'top'
      });
    },(err : HttpErrorResponse) =>{
      
      this.snackBar.open("error", "Close", {
        duration: 2000,
        panelClass: ["warning"],
        verticalPosition: 'top'
      });
    });
  }



 
  }
  export interface Element {
    status: string;
  }
  
  const ELEMENT_DATA: Element[] = [
    { status: 'Approved'},
    { status: 'Rejected'},
  ];

class ImageSnippet {
  constructor(public src: string, public file: File) {}

}
