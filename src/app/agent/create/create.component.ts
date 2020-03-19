import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  email: string;
  agentcode:string;
  commission:any;
  action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Ownet', email: 'arjundeepz@gmail.com', agentcode:'46546128',commission:'10%',action:'edit not_interested'},
  {position: 2, name: 'Aparna homes', email: 'hareesh4a1@gmail.com', agentcode:'46546128',commission:'10%',action:'edit not_interested'},
  {position: 3, name: 'Ownforms', email: 'rajatwasan5@gmail.com', agentcode:'46546128',commission:'10%',action:'edit not_interested'},
  {position: 4, name: 'Advanta Limited', email: 'sagi95No.9@gmail.com', agentcode:'46546128',commission:'10%',action:'edit not_interested'},
  {position: 5, name: 'Ramky One Marvel', email: 'hareesh4a1@gmail.com', agentcode:'46546128',commission:'10%',action:'edit not_interested'},
  {position: 6, name: 'Tummala Builders',email: 'muralianhsirk+1@gmail.com', agentcode:'46546128',commission:'10%',action:'edit not_interested'},
  {position: 7, name: 'Malayasian homes',email: 'rajasekharkoka143@gmail.com', agentcode:'46546128',commission:'10%',action:'edit not_interested'},
  {position: 8, name: 'Bhandari Homes',email: 'rajat@cognier.co', agentcode:'46546128',commission:'10%',action:'edit not_interested'},
  {position: 9, name: 'SVP', email: 'rajatwasan12+2@gmail.com', agentcode:'46546128',commission:'10%',action:'edit not_interested'},
  {position: 10, name: 'Dhanasree Arcade',email: 'sharmapratiksha021@gmail.com', agentcode:'46546128',commission:'10%',action:'edit not_interested'},
];
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name','email','agentcode','commission','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
  }

}
