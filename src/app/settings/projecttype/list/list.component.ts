import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  type: string;
  position: number;
  action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, type: 'Ownet', action:'edit delete'},
  {position: 2, type: 'Aparna homes', action:'edit delete'},
  {position: 3, type: 'Ownforms', action:'edit delete'},
  {position: 4, type: 'Advanta Limited', action:'edit delete'},
  {position: 5, type: 'Ramky One Marvel', action:'edit delete'},
  {position: 6, type: 'Tummala Builders',action:'edit delete'},
  {position: 7, type: 'Malayasian homes',action:'edit delete'},
  {position: 8, type: 'Bhandari Homes',action:'edit delete'},
  {position: 9, type: 'SVP', action:'edit delete'},
  {position: 10, type: 'Dhanasree Arcade',action:'edit delete'},
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
