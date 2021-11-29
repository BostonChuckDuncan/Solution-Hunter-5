import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserNotificationService implements OnInit {
public messenger = new BehaviorSubject<string>('');

constructor() { }

ngOnInit() {

}

postMessage(msg: string, seconds = 5 ) {
  this.messenger.next(msg);

  if (msg.length > 0 ) {
  setTimeout( () => {
    this.postMessage('');
    }, seconds * 1000 );
  }
}

}
