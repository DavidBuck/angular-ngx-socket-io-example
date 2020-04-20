import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketDataService {
  constructor(private socket: Socket) {}

  getData(): Observable<number[]> {
    this.socket.emit('subscribeToServer', 1000);

    return this.socket.fromEvent<number[]>('reading');
  }
}
