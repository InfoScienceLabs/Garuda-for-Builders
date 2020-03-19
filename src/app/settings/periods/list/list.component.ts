import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  period: string;
  position: number;
  action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, period:'2 months',action:'edit delete'},
  {position: 2, period: '2 months',action:'edit delete'},
  {position: 3, period: '2 months',action:'edit delete'},
  {position: 4, period: '2 months',action:'edit delete'},
  {position: 5, period: '2 months',action:'edit delete'},
  {position: 6, period: '2 months',action:'edit delete'},
  {position: 7, period: '2 months',action:'edit delete'},
  {position: 8, period: '2 months',action:'edit delete'},
  {position: 9, period: '2 months',action:'edit delete'},
  {position: 10, period: '2 months',action:'edit delete'},
];
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'period', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
  }

}
