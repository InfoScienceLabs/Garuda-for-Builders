import { Injectable } from '@angular/core';
import * as socketIO from 'socket.io-client';
import { URI } from '../../config/url';
const SOCKET_URL =  'http://158.69.118.172:9000';
import { AuthenticationService } from '../auth/authentication.service';

@Injectable({
  providedIn: 'root'
})


export class SocketService {
  socket: SocketIOClient.Socket;
  messageText: string;
  messages: Array<any>;
  constructor( private authService : AuthenticationService) { }
 
  public initSocket() {
    if(this.authService.isLoggedIn){
      
      this.socket = socketIO(SOCKET_URL);
      console.log('socket',this.socket);
      this.messages = new Array();
      this.socket.emit('login', {
        msg: this.authService.currentUser
      });
      this.socket.on('message-received', (msg: any) => {
        this.messages.push(msg);
        console.log(msg);
        console.log(this.messages);
      });
      this.socket.emit('event1', {
        msg: 'Client to server, can you hear me server?'
      });
      this.socket.on('event2', (data: any) => {
        this.messages.push(data.msg);
        console.log(data.msg);
        this.socket.emit('event3', {
          msg: 'Yes, its working for me!!'
        });
      });
      this.socket.on('event4', (data: any) => {
        this.messages.push(data.msg);
        console.log(data.msg);
      });
      console.log(this.messages);
    }
    

  }
  // public logout_notify(){
  //   this.socket.emit('logout' ,{
  //     msg: this.authService.currentUser
  //   });
  // }
 }
