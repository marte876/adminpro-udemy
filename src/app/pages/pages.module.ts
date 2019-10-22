import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgessComponent,
    Grafica1Component
  ],
  exports: [
    DashboardComponent,
    ProgessComponent,
    Grafica1Component
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ],
  providers: []
})
export class PagesModule { }
