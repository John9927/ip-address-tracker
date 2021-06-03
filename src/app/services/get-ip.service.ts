import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetIpService {

  constructor() { }

  signIn(search: string) {
    console.log(search)
  }
}
