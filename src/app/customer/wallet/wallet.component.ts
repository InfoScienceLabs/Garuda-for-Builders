import { Component, OnInit } from '@angular/core';
import { User, Address } from '../../models/models';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { UserService } from 'src/app/services/services';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  isLinear = false;
  readOnly = true;
  constructor(private authService : AuthenticationService, private userService: UserService) { }
  public user : User;
  public address : Address;
  ngOnInit() {
    this.readOnly = true;
    this.user = new User();
    this.address = new Address();
    this.user = this.authService.currentUser;
    this.userService.getDetailsOfUser(this.user.id).subscribe((data : User) =>{
      
      this.user = data[0];
    },(err : HttpErrorResponse) =>{
       console.log(err);
    });
    this.getwallet()
    
    
  }

  updatewallet(){
    this.userService.getwalletbalance().subscribe((data: User) => {
    });
  }
  
  getwallet(){
    this.userService.getBalance(this.user.password).subscribe((data : User) =>{
      console.log("11111111111111")
      this.user = data[0];
    },(err : HttpErrorResponse) =>{
       console.log(err);
    });
  }

}
