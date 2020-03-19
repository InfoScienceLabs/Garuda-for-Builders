import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  startdate: string;
  enddate:string;
  action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Ownet', startdate: '09-01-2019', enddate:'02-05-2019',action:'edit delete'},
  {position: 2, name: 'Aparna homes', startdate: '09-01-2019', enddate:'02-05-2019',action:'edit delete'},
  {position: 3, name: 'Ownforms', startdate: '09-01-2019', enddate:'02-05-2019',action:'edit delete'},
  {position: 4, name: 'Advanta Limited', startdate: '09-01-2019', enddate:'02-05-2019',action:'edit delete'},
  {position: 5, name: 'Ramky One Marvel', startdate: '09-01-2019', enddate:'02-05-2019',action:'edit delete'},
  {position: 6, name: 'Tummala Builders',startdate: '09-01-2019', enddate:'02-05-2019',action:'edit delete'},
  {position: 7, name: 'Malayasian homes',startdate: '09-01-2019', enddate:'02-05-2019',action:'edit delete'},
  {position: 8, name: 'Bhandari Homes',startdate: '09-01-2019', enddate:'02-05-2019',action:'edit delete'},
  {position: 9, name: 'SVP', startdate: '09-01-2019', enddate:'02-05-2019',action:'edit delete'},
  {position: 10, name: 'Dhanasree Arcade',startdate: '09-01-2019', enddate:'02-05-2019',action:'edit delete'},
];
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name','startdate','enddate','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
  }

}
