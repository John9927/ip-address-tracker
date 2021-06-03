import { GetIpService } from './../services/get-ip.service';
import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, icon, marker, polyline } from 'leaflet';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements OnInit {

  constructor(public getIpService: GetIpService) { }

  ngOnInit(): void {
  }

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 9,
    center: latLng([this.getIpService.coordLat, this.getIpService.coordLon]),
  };

  // Marker
  summit = marker([this.getIpService.coordLat, this.getIpService.coordLon], {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });

  // Layers control
  layersControl = {
    overlays: {
      'City': this.summit
    }
  };

}
