import { Inject, Injectable } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { INITIAL_ROUTES } from '../plugins/tokens';
import { MenuLink, MenubarService } from './menubar.service';

@Injectable({
    providedIn: 'root',
})
export class RouterInitializationService {
    private isInitialized = false;
    constructor(
        @Inject(INITIAL_ROUTES) public readonly routes: Routes,
        private readonly menubarService: MenubarService,
    ) {
        console.log('RouterInitializationService constructor');
    }

    addRoute(route: Route) {
        if (this.isInitialized) throw new Error('Cannot add routes after initialization');

        this.routes.push(route);
    }

    addMenuRoute(route: Route & MenuLink) {
        this.menubarService.addMenuItem(route);
        this.addRoute(route);
    }

    removeRoute(path: string) {
        if (this.isInitialized) throw new Error('Cannot remove routes after initialization');

        const index = this.routes.findIndex((r) => r.path === path);
        if (index === -1) throw new Error(`Route ${path} is not in routes`);
        this.routes.splice(index, 1);
    }

    removeMenuRoute(path: string) {
        this.menubarService.removeMenuItem(path);
        this.removeRoute(path);
    }

    replaceRoute(route: Route) {
        if (this.isInitialized) throw new Error('Cannot replace routes after initialization');

        const index = this.routes.findIndex((r) => r.path === route.path);
        if (index === -1) throw new Error(`Route ${route.path} is not in routes`);
        this.routes[index] = route;
    }

    replaceMenuRoute(route: Route & MenuLink) {
        this.menubarService.replaceMenuItem(route);
        this.replaceRoute(route);
    }

    initialize() {
        if (this.isInitialized) throw new Error('Cannot initialize routes more than once');
        this.isInitialized = true;
        this.routes.push(
            // 404
            {
                path: '**',
                loadComponent: () =>
                    import('../pages/not-found-page.component').then(
                        (m) => m.NotFoundPageComponent,
                    ),
            },
        );
    }
}
