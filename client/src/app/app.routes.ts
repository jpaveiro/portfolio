import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error-404/error-404.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Welcome to my portfolio! | Aveiro'
    },
    {
        path: '**',
        component: Error404Component,
        title: '404 Not found | Aveiro'
    }
];
