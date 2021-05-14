import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StocksAPIService {

  constructor(private http: HttpClient) {
  }

  getPosts() {
    return fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-summary?region=US", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "3299feba69msh9b7492b9072e217p1df24cjsn8e152f91b053",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
      }
    });
  }

  getList() {
    return fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/list?category=generalnews&region=US", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "3299feba69msh9b7492b9072e217p1df24cjsn8e152f91b053",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
      }
    });
  }

  getStockBySymbol(symbol: string) {
    return fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=${symbol}&region=US`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "3299feba69msh9b7492b9072e217p1df24cjsn8e152f91b053",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
      }
    });
  }
}
