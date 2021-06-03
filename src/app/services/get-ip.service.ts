import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetIpService {
  url = 'https://geo.ipify.org/api/v1';
  API = "at_X9OQXshEMaRGiHQT74sjM7WumCGYi";
  ipAddress: string;

  constructor(private http: HttpClient) { }

  signIn(search: string) {
    this.ipAddress = search;
    console.log(this.ipAddress)
  }

  getCity() {
    return this.http.get(`${this.url}?apiKey=${this.API}&ipAddress=${this.ipAddress}`)
  }

// https://geo.ipify.org/api/v1?apiKey=at_X9OQXshEMaRGiHQT74sjM7WumCGYi&ipAddress=8.8.8.8

}
