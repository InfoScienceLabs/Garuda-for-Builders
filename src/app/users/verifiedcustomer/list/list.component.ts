import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  email: string;
  regdate:string;
  verified:any;
  bankstatus:any;
  kycstatus:any;
  action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Ownet', email: 'arjundeepz@gmail.com', regdate:'22-04-2019',verified:'Yes',bankstatus:'Not Uploaded',kycstatus:'Uploaded',action:'edit delete'},
  {position: 2, name: 'Aparna homes', email: 'hareesh4a1@gmail.com', regdate:'22-04-2019',verified:'Yes',bankstatus:'Not Uploaded',kycstatus:'Uploaded',action:'edit delete'},
  {position: 3, name: 'Ownforms', email: 'rajatwasan5@gmail.com', regdate:'22-04-2019',verified:'Yes',bankstatus:'Not Uploaded',kycstatus:'Uploaded',action:'edit delete'},
  {position: 4, name: 'Advanta Limited', email: 'sagi95No.9@gmail.com', regdate:'22-04-2019',verified:'Yes',bankstatus:'Not Uploaded',kycstatus:'Uploaded',action:'edit delete'},
  {position: 5, name: 'Ramky One Marvel', email: 'hareesh4a1@gmail.com', regdate:'22-04-2019',verified:'Yes',bankstatus:'Not Uploaded',kycstatus:'Uploaded',action:'edit delete'},
  {position: 6, name: 'Tummala Builders',email: 'muralianhsirk+1@gmail.com', regdate:'22-04-2019',verified:'Yes',bankstatus:'Not Uploaded',kycstatus:'Uploaded',action:'edit delete'},
  {position: 7, name: 'Malayasian homes',email: 'rajasekharkoka143@gmail.com', regdate:'22-04-2019',verified:'Yes',bankstatus:'Not Uploaded',kycstatus:'Uploaded',action:'edit delete'},
  {position: 8, name: 'Bhandari Homes',email: 'rajat@cognier.co', regdate:'22-04-2019',verified:'Yes',bankstatus:'Not Uploaded',kycstatus:'Uploaded',action:'edit delete'},
  {position: 9, name: 'SVP', email: 'rajatwasan12+2@gmail.com', regdate:'22-04-2019',verified:'Yes',bankstatus:'Not Uploaded',kycstatus:'Uploaded',action:'edit delete'},
  {position: 10, name: 'Dhanasree Arcade',email: 'sharmapratiksha021@gmail.com', regdate:'22-04-2019',verified:'Yes',bankstatus:'Not Uploaded',kycstatus:'Uploaded',action:'edit delete'},
];
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name','email','regdate','verified','bankstatus','kycstatus','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
  }

}
