import { InjectionToken } from '@angular/core';
import { Routes } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export const STATE_SERVICE = new InjectionToken<{ subject: BehaviorSubject<number> }>(
    'STATE_SERVICE',
);

export const INITIAL_ROUTES = new InjectionToken<Routes>('INITIAL_ROUTES');
