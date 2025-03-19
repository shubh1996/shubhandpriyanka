import { Routes } from '@angular/router';
import { ShubhComponent } from './shubh/shubh.component';
import { PriyankaComponent } from './priyanka/priyanka.component';
import { PriyankaEnglishComponent } from './priyanka-english/priyanka-english.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'shubh',
        pathMatch: 'full'
    },
    {
        path: 'shubh',
        component: ShubhComponent
    },
    {
        path:'priyanka',
        component: PriyankaComponent
    },
    {
        path:'priyanka-ps',
        component: PriyankaEnglishComponent
    },
    {
        path: '**',
        redirectTo: 'shubh'
    }
];
