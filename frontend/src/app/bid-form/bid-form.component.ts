import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bid-form',
  templateUrl: './bid-form.component.html',
  styleUrls: ['./bid-form.component.css']
})
export class BidFormComponent implements OnInit {
  private BID_ENDPOINT_URL = 'https://ship-shop.herokuapp.com/createBid';
  constructor(
    private http: HttpClient,
    public userId: string,
    public tempDev: number,
    public humidityDev: number,
    public co2Dev: number,
    public fillDev: number,
    public reservePrice: number,
    public containerId: number
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.http.post(this.BID_ENDPOINT_URL, {
      userId: this.userId,
      tempDev: this.tempDev,
      humidityDev: this.humidityDev,
      co2Dev: this.co2Dev,
      fillDev: this.fillDev,
      reservePrice: this.reservePrice,
      containerId: this.containerId
    });
  }

}
