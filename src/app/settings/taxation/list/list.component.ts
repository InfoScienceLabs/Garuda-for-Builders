import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  type: string;
  position: number;
  action:any;
  percentage:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, type: 'Tariff', percentage:'26 %',action:'edit delete'},
  {position: 2, type: 'Consumption tax', percentage:'10 %',action:'edit delete'},
  {position: 3, type: 'Property tax', percentage:'6 %',action:'edit delete'},
  {position: 4, type: 'Payroll tax', percentage:'39 %',action:'edit delete'},
  {position: 5, type: 'Effective taxes', percentage:'40 %',action:'edit delete'},
  {position: 6, type: '	General taxes',percentage:'50 %',action:'edit delete'},
  {position: 7, type: 'Excise taxes',percentage:'78 %',action:'edit delete'},
  {position: 8, type: 'Current taxes',percentage:'2 %',action:'edit delete'}
];
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'type', 'percentage','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
  }

}
