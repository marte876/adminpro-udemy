import { Component, OnInit,Input  } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html'
})
export class GraficaDonaComponent implements OnInit {

  @Input("labels") doughnutChartLabels: Label[];
  @Input("data") doughnutChartData: MultiDataSet;
  @Input("type") doughnutChartType: ChartType;
  @Input("titulo") titulo: String;

  constructor() { }

  ngOnInit() {
  }

}
