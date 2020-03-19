import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  purches: string;
  amount:string;
  propertytype:any;
  certificate:any;
  action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Ownet', purches: '12-04-2017', amount:'12500',propertytype:'apartment',certificate:'Not Uploaded',action:'edit delete'},
  {position: 2, name: 'Aparna homes', purches: '22-04-2017', amount:'12500',propertytype:'apartment',certificate:'Not Uploaded',action:'edit delete'},
  {position: 3, name: 'Ownforms', purches: '12-07-2018', amount:'12500',propertytype:'apartment',certificate:'Not Uploaded',action:'edit delete'},
  {position: 4, name: 'Advanta Limited', purches: '26-01-2015', amount:'12500',propertytype:'apartment',certificate:'Not Uploaded',action:'edit delete'},
  {position: 5, name: 'Ramky One Marvel', purches: '12-02-2018', amount:'12500',propertytype:'apartment',certificate:'Not Uploaded',action:'edit delete'},
  {position: 6, name: 'Tummala Builders',purches: '15-07-2017', amount:'12500',propertytype:'apartment',certificate:'Not Uploaded',action:'edit delete'},
  {position: 7, name: 'Malayasian homes',purches: '12-01-2016', amount:'12500',propertytype:'apartment',certificate:'Not Uploaded',action:'edit delete'},
  {position: 8, name: 'Bhandari Homes',purches: '18-04-2017', amount:'12500',propertytype:'apartment',certificate:'Not Uploaded',action:'edit delete'},
  {position: 9, name: 'SVP', purches: '22-01-2019', amount:'12500',propertytype:'apartment',certificate:'Not Uploaded',action:'edit delete'},
  {position: 10, name: 'Dhanasree Arcade',purches: '15-04-2017', amount:'12500',propertytype:'apartment',certificate:'Not Uploaded',action:'edit delete'},
];
@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name','purches','amount','propertytype','certificate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
  }

}
