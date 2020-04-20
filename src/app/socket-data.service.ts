import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketDataService {
  constructor(private socket: Socket) {}

  getData() {
    this.socket.emit('subscribeToServer', 1000);

    return this.socket.fromEvent<number[]>('reading');
  }
}
