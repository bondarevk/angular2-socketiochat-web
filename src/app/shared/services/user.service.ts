import { Injectable } from '@angular/core';
import { SocketService } from "./socket.service";

export interface IMessage {
  id: number,
  text: string,
  sender: string
}

@Injectable()
export class UserService {

  public messages: Map<number, IMessage> = new Map();

  constructor(private socketService: SocketService) {

    socketService.on('message', (message: IMessage) => {
      console.log(message);
      this.messages.set(message.id, message);
    });

  }

}