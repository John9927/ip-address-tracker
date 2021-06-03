import { GetIpService } from './services/get-ip.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ip-address-tracker';
  response: any;
  name: string;

  lat: string;
  lng: string;
  search;
  constructor(private fb: FormBuilder, public getIpService: GetIpService) {
  }

  ngOnInit() {  }

  searchForm = this.fb.group({
    search: ['', [Validators.required]],
  });

  searchValue(search: string) {
    this.getIpService.searchValue(search);
    this.getData();
  }

  getData() {
    this.getIpService.getCity().subscribe(res => {
      this.response = res;
      this.getIpService.response = true;
      this.getIpService.coordLat = this.response.location.lat;
      this.getIpService.coordLon = this.response.location.lng;
      console.log("Response", this.response);
      console.log("coordLat", this.getIpService.coordLat);
      console.log("coordLon", this.getIpService.coordLon);
    })
  }
}
