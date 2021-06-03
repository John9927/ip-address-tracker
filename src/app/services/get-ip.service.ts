import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetIpService {
  url = 'https://geo.ipify.org/api/v1';
  API = "at_X9OQXshEMaRGiHQT74sjM7WumCGYi";
  ipAddress: string;
  coordLon: any;
  coordLat: any;
  response = false;

  constructor(private http: HttpClient) { }

  signIn(search: string) {
    this.ipAddress = search;
    this.getCity();
  }

  getCity() {
    return this.http.get(`${this.url}?apiKey=${this.API}&ipAddress=${this.ipAddress}`)
  }
}
