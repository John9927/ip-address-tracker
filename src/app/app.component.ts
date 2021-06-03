import { GetIpService } from './services/get-ip.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ip-address-tracker';

  ngOnInit() {}

  constructor(private fb: FormBuilder, public getIpService: GetIpService) {}

  searchForm = this.fb.group({
    search: ['', [Validators.required]],
  });

  onSign(search: string) {
    this.getIpService.signIn(search);
  }
}
