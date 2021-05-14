import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  message: string;
  charts = new Array();

  constructor() { }

  setMessage(mess) {
    this.message = mess;
  }

  getMessage() {
    return this.message;
  }

  setChart(ch) {
    this.charts.push(ch);
  }

  getChart() {
    return this.charts;
  }

  removeChart(symbol) {
    /*for (var i = 0; i < this.charts.length; i++) {
      if ((this.charts[i].symbol).includes(symbol)) {
        this.charts.splice(i, 1);
      }
    }*/
    const result = this.charts.filter(item => item.symbol != symbol);
    this.charts = result;
    return this.charts;
  }
}
