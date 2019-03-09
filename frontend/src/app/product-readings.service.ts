import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductReadingsService {

  private API_BASE_URL = 'https://ship-shop.herokuapp.com';
  constructor(private http: HttpClient) { }

  getReadings(id: Number) {
    const ENDPOINT_URL = '/getReading';
    return this.http.get(ENDPOINT_URL, {
      params: {
        id: String(id)
      }
    });
  }

}
