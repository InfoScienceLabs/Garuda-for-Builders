import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  type: string;
  status:string;
  blockchain:any;
  total:any;
  action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Ownet', type: 'Commercial', status:'launched',blockchain:'50',total:'100',action:'edit delete'},
  {position: 2, name: 'Aparna homes', type: 'Residential', status:'launched',blockchain:'50',total:'100',action:'edit delete'},
  {position: 3, name: 'Ownforms', type: 'Agricultural', status:'launched',blockchain:'50',total:'100',action:'edit delete'},
  {position: 4, name: 'Advanta Limited', type: 'Residential', status:'launched',blockchain:'50',total:'100',action:'edit delete'},
  {position: 5, name: 'Ramky One Marvel', type: 'Residential', status:'launched',blockchain:'50',total:'100',action:'edit delete'},
  {position: 6, name: 'Tummala Builders',type: 'Residential', status:'launched',blockchain:'50',total:'100',action:'edit delete'},
  {position: 7, name: 'Malayasian homes',type: 'Residential', status:'launched',blockchain:'50',total:'100',action:'edit delete'},
  {position: 8, name: 'Bhandari Homes',type: 'Residential', status:'launched',blockchain:'50',total:'100',action:'edit delete'},
  {position: 9, name: 'SVP', type: 'Commerciale', status:'launched',blockchain:'50',total:'100',action:'edit delete'},
  {position: 10, name: 'Dhanasree Arcade',type: 'Commercial', status:'launched',blockchain:'50',total:'100',action:'edit delete'},
];
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name','type','status','blockchain','total','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
  }

}
