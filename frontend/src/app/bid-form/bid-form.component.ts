import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bid-form',
  templateUrl: './bid-form.component.html',
  styleUrls: ['./bid-form.component.css']
})
export class BidFormComponent implements OnInit {
  private BID_ENDPOINT_URL = 'https://ship-shop.herokuapp.com/createBid';
  public userId = 3;
  public tempDev = 0.5;
  public humidityDev = 0.5;
  public co2Dev = 0.5;
  public fillDev: 0.5;
  public reservePrice: 200;
  public containerId: 666;
  constructor(
    private http: HttpClient,
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
