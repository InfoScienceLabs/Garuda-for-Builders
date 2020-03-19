import { Component, OnInit, SimpleChanges,Inject } from '@angular/core';
import { Property, Owner, Address, User } from '../../models/models';
import { ActivatedRoute } from '@angular/router';
import { PropertyService, ImageService, UserService } from '../../services/services';
import { ControlContainer, NgForm } from '@angular/forms';
import { HttpErrorResponse } from "@angular/common/http";
import { MatSnackBar } from "@angular/material";
import { MatRadioModule } from '@angular/material/radio';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { isObject, isString } from "util";
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-singleproperty',
  templateUrl: './singleproperty.component.html',
  styleUrls: ['./singleproperty.component.scss']
})
export class SinglepropertyComponent implements OnInit {

  displayedColumns = ['select', 'status'];
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
  loading: boolean;
  readOnly: boolean;
  checked: Boolean;
  imageData: [];
  constructor(private propertyService: PropertyService, private snackBar: MatSnackBar,public dialog: MatDialog,
    private route: ActivatedRoute, private userService: UserService, private imageService: ImageService, private MatRadioModule: MatRadioModule) {
    this.loading = false;
    this.current_date = new Date();
    this.startDate = new Date(1990, 0, 1);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(BuyPropertyComponent, {
      width: '800px'
      // height:'60vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  public property: Property;
  isLinear = false;
  ngOnInit() {
    this.disable_stake = false;
    this.property = new Property();
    this.property.owner = [];
    this.readOnly = true;
    this.property.address = new Address();
    this.property.image = [];
    this.property.docs = [];
    this.property.location = [];
    this.userArray = [];
    this.route.url.subscribe(data => {
      if (data[0] && data[0].path === 'create') {
        this.isNew = true;
        this.property.image = [];
      }
      else {
        this.isNew = false;
        this.property.propertyId = data[1].path;
        this.propertyService.getPropertyByID(this.property.propertyId).subscribe((data: Property) => {
          this.property = data;
        }, (err: HttpErrorResponse) => {
          //this.error =  err.error['message'];
        });
      }
    });
  }



  userArray: User[];
  searchUser(event) {
    if (event.length > 2)
      this.userService.searchUserByKeyword(event).subscribe((response: User[]) => {
        this.userArray = response;
      });
  }
  disable_stake: boolean;
  staticValueForStake(i, type) {
    if (type === 'Sole propertiership') {
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
  remove(index: number) {
    this.property.image.splice(index, 1);
  }
  length = 0;
  countingCharacters(event) {
    this.length = event.length;
  }



  propertystatus() {
    console.log(this.property.status);
    if (!this.property.message) this.property.message = 'approved';
    var confirm = { propertyId: this.property.propertyId, status: this.property.status, message: this.property.message };
    console.log(confirm);
    this.propertyService.propertystatus(confirm).subscribe(data => {
      // this.snackBar.
    })
  }

}

@Component({
  selector: 'app-buyproperty',
  templateUrl: './buyproperty.component.html',
})
export class BuyPropertyComponent {

  constructor(
    public dialogRef: MatDialogRef<BuyPropertyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
export interface Element {
  status: string;
}

const ELEMENT_DATA: Element[] = [
  { status: 'Pending' },
  { status: 'Approved' },
  { status: 'Rejected' },
];

class ImageSnippet {
  constructor(public src: string, public file: File) { }

}

