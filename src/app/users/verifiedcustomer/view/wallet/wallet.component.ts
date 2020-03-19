import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  walletid: string;
  position: number;
  propertyname: string;
  walletname:string;
  txnid:any;
  from:any;
  to:any;
  amount:any;
  action:any;
  txndate:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, walletid: '1462358', propertyname: 'Ownet', walletname:'lorem',txnid:'125328',from:'21-04-2018',to:'24-04-2019',amount:'1200',txndate:'12-07-2019',action:'edit delete'},
  {position: 2, walletid: '1462358', propertyname: 'Aparna homes', walletname:'lorem',txnid:'125328',from:'21-04-2018',to:'24-04-2019',amount:'1200',txndate:'12-07-2019',action:'edit delete'},
  {position: 3, walletid: '1462358', propertyname: 'Ownforms', walletname:'lorem',txnid:'125328',from:'21-04-2018',to:'24-04-2019',amount:'1200',txndate:'12-07-2019',action:'edit delete'},
  {position: 4, walletid: '1462358', propertyname: 'Advanta Limited', walletname:'lorem',txnid:'125328',from:'21-04-2018',to:'24-04-2019',amount:'1200',txndate:'12-07-2019',action:'edit delete'},
  {position: 5, walletid: '1462358', propertyname: 'Ramky One Marvel', walletname:'lorem',txnid:'125328',from:'21-04-2018',to:'24-04-2019',amount:'1200',txndate:'12-07-2019',action:'edit delete'},
  {position: 6, walletid: '1462358',propertyname: 'Tummala Builders', walletname:'lorem',txnid:'125328',from:'21-04-2018',to:'24-04-2019',amount:'1200',txndate:'12-07-2019',action:'edit delete'},
  {position: 7, walletid: '1462358',propertyname: 'Malayasian homes', walletname:'lorem',txnid:'125328',from:'21-04-2018',to:'24-04-2019',amount:'1200',txndate:'12-07-2019',action:'edit delete'},
  {position: 8, walletid: '1462358',propertyname: 'Bhandari Homes', walletname:'lorem',txnid:'125328',from:'21-04-2018',to:'24-04-2019',amount:'1200',txndate:'12-07-2019',action:'edit delete'},
  {position: 9, walletid: '1462358', propertyname: 'SVP', walletname:'lorem',txnid:'125328',from:'21-04-2018',to:'24-04-2019',amount:'1200',txndate:'12-07-2019',action:'edit delete'},
  {position: 10, walletid: '1462358',propertyname: 'Dhanasree Arcade', walletname:'lorem',txnid:'125328',from:'21-04-2018',to:'24-04-2019',amount:'1200',txndate:'12-07-2019',action:'edit delete'},
];
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  displayedColumns: string[] = ['position', 'walletid','propertyname','walletname','txnid','from','to','amount','txndate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
  }

}
