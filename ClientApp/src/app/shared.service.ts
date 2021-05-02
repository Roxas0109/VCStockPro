import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  message: string;

  constructor() { }

  setMessage(mess) {
    this.message = mess;
  }

  getMessage() {
    return this.message;
  }
}
