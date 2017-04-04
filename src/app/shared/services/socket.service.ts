import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';

const socketUri:string = 'http://localhost:25572';

@Injectable()
export class SocketService {

  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io.connect(socketUri);
    this.socket.on('connect', this.onConnect.bind(this));
    this.socket.on('disconnect', this.onDisconnect.bind(this));
  }

  public on(event: string, callback: Function): void {
    this.socket.on(event, callback);
  }

  protected onConnect(): void {
    console.log('connected');
    this.socket.emit('whoop', {
      text: 'hello'
    })
  }

  protected onDisconnect(): void {
    console.log('disconnected');
  }

}
