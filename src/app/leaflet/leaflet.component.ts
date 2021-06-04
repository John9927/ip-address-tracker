import { GetIpService } from './../services/get-ip.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements OnInit {

  constructor(public getIpService: GetIpService) { }

  ngOnInit(): void {
    this.getIpService.getCoords();
  }
}
