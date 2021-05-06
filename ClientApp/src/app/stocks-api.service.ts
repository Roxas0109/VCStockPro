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
        "x-rapidapi-key": "53a3423ce6mshd2b7f90067c439dp1d6a06jsn1e55b49a3aef",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
      }
    });
  }

  getList() {
    return fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/list?category=generalnews&region=US", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "53a3423ce6mshd2b7f90067c439dp1d6a06jsn1e55b49a3aef",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
      }
    });
  }

  getChart(stock) {
    return fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart?interval=5m&symbol="+stock+"&range=1d&region=US", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "53a3423ce6mshd2b7f90067c439dp1d6a06jsn1e55b49a3aef",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
      }
    });
  }
}
