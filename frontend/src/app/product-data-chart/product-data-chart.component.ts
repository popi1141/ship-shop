import { Component, OnInit, Input } from '@angular/core';
import Chart from 'chart.js';

class DataPoint {
  x: number;
  y: number;
}

class DataSet {
  data: Array<DataPoint>;
  baseline: number;
}

@Component({
  selector: 'app-product-data-chart',
  templateUrl: './product-data-chart.component.html',
  styleUrls: ['./product-data-chart.component.css']
})
export class ProductDataChartComponent implements OnInit {
  @Input() dataSets: {[key: string]: DataSet};
  title = '';
  private chart: Chart;
  constructor() { }

  ngOnInit() {
    this.chart = new Chart('dataChart', {
      type: 'line',
      data: {
        datasets: [{
          fill: 1,
          label: 'Measured Value',
          data: [],
        }, {
          label: 'Stated Value',
          data: [],
        }]
      },
      options: {
        legend: {
          position: 'bottom'
        },
        title: {
          text: this.title
        },
        layout: {
          padding: {
            top: 10
          }
        },
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    });
    this.showData('Temperature');
  }

  showData(label) {
    const dataSet = this.dataSets[label];
    this.chart.data.datasets[0].data = dataSet.data;
    this.chart.data.datasets[1].data = [{x: 0, y: dataSet.baseline}, {x: dataSet.data.length - 1, y: dataSet.baseline}];
    this.title = label;
    this.chart.update();
  }
}
