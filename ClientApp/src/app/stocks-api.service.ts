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
      /*.then(response => response.json())
      .then(json => console.log(json));*/

    //return this.http.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole');
  }
}
