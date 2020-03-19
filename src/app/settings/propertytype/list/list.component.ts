import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  type: string;
  position: number;
  action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, type: 'Office space', action:'edit delete'},
  {position: 2, type: 'Warehouse', action:'edit delete'},
  {position: 3, type: 'Commercial Land', action:'edit delete'},
  {position: 4, type: 'Plot', action:'edit delete'},
  {position: 5, type: 'Villa', action:'edit delete'},
  {position: 6, type: 'Apartment',action:'edit delete'},
  {position: 7, type: 'Multistorey apartment',action:'edit delete'},
  {position: 8, type: 'Farm House',action:'edit delete'},
  {position: 9, type: 'Apartment', action:'edit delete'},
  {position: 10, type: 'House',action:'edit delete'},
];
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'type','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
  }

}
