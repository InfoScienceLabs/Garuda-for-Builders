import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  configuration: string;
  position: number;
  action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, configuration: '1BHK', action:'edit delete'},
  {position: 2, configuration: '2BHK', action:'edit delete'},
  {position: 3, configuration: '3BHK', action:'edit delete'},
  {position: 4, configuration: '2BHK', action:'edit delete'},
  {position: 5, configuration: '3BHK', action:'edit delete'},
  {position: 6, configuration: '1BHK',action:'edit delete'},
  {position: 7, configuration: '3BHK',action:'edit delete'},
  {position: 8, configuration: '2BHK',action:'edit delete'},
  {position: 9, configuration: '3BHK', action:'edit delete'},
  {position: 10, configuration: '2BHK',action:'edit delete'},
];
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'configuration','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
  }

}
