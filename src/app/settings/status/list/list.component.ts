import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  status: string;
  position: number;
  action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, status: 'Inprogress', action:'edit delete'},
  {position: 2, status: 'Active', action:'edit delete'},
  {position: 3, status: 'Just Launched', action:'edit delete'}
];
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'status','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
  }

}
