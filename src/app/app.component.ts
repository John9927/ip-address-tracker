import { GetIpService } from './services/get-ip.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ip-address-tracker';
  response: any;
  constructor(private fb: FormBuilder, public getIpService: GetIpService) { }


  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 7,
    center: latLng([ 46.879966, -121.726909 ])
  };


  ngOnInit() {}

  searchForm = this.fb.group({
    search: ['', [Validators.required]],
  });


  onSign(search: string) {
    this.getIpService.signIn(search);

    if(search) {
      this.getIpService.getCity().subscribe(res => {
        this.response = res;
        console.log(this.response);
      })
    }
  }
}
