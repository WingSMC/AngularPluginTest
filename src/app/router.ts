import { Routes } from '@angular/router';
import { Page1Component, Page2Component } from 'base';

export const baseRoutes: Routes = [
    {
        path: '',
        title: 'Page 1',
        component: Page1Component,
    },
    {
        path: 'page2',
        title: 'Page 2',
        component: Page2Component,
    },
];
