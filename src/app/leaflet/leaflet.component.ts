import { GetIpService } from './../services/get-ip.service';
import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, icon, marker, polyline } from 'leaflet';
import * as L from 'leaflet';
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
