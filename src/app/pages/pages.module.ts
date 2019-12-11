import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import {GraficaDonaComponent} from '../components/grafica-dona/grafica-dona.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgessComponent,
    Grafica1Component,
    IncrementadorComponent,
    GraficaDonaComponent
  ],
  exports: [
    DashboardComponent,
    ProgessComponent,
    Grafica1Component
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ],
  providers: []
})
export class PagesModule { }
