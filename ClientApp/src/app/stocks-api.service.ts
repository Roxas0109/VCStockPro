import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StocksAPIService {
  key: string;
  constructor(private http: HttpClient) {
    this.key = "8df54beca8msh26e6b19580be7e7p18231ejsn15b5f80d11fa";
  }

  getPosts() {
    return fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-summary?region=US", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": this.key,
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
      }
    });
  }

  getList() {
    return fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/list?category=generalnews&region=US", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": this.key,
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
      }
    });
  }

  getChart(stock) {
    return fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart?interval=5m&symbol="+stock+"&range=1d&region=US", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": this.key,
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
      }
    });
  }

  getProfile(stock) {
    return fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=" + stock + "&region=US", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": this.key,
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
      }
    });
  }

  getAutoComplete(stock) {
    return fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q="+stock+"&region=US", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": this.key,
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
      }
    });
  }
}
