import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Grafica1Component } from './grafica1/grafica1.component';



const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'progress', component: ProgessComponent},
        { path: 'graficas1', component: Grafica1Component},
        { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
