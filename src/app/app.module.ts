import { HttpClientModule } from '@angular/common/http'
import {
    APP_INITIALIZER,
    Injector,
    NgModule,
    NgModuleRef,
    createNgModule,
} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ROUTES, RouterModule } from '@angular/router'
import {
    module as BaseModule,
    INITIAL_ROUTES,
    MenuItemComponent,
    Plugin,
    PluginModuleInterface,
    RouterInitializationService,
} from 'base'
import { AppComponent } from './app.component'
import { baseRoutes } from './router'
import { TranslocoRootModule } from './transloco-root.module'

@NgModule({
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initializePlugins,
            deps: [Injector],
            multi: true,
        },
        {
            provide: INITIAL_ROUTES,
            useValue: baseRoutes,
        },
        {
            provide: ROUTES,
            useFactory: (routerInitService: RouterInitializationService) => {
                routerInitService.initialize();
                return routerInitService.routes;
            },
            deps: [RouterInitializationService],
            multi: true,
        },
        HttpClientModule,
        TranslocoRootModule,
    ],
    imports: [
        BaseModule,
        BrowserAnimationsModule,
        BrowserModule,
        MenuItemComponent,
        RouterModule,
        RouterModule.forRoot([]),
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}

export function initializePlugins(injector: Injector): () => Promise<void> {
    return async () => {
        const _plugins = await loadPlugins(injector);
    };
}

function loadPlugins(injector: Injector): Promise<NgModuleRef<PluginModuleInterface>[]> {
    // TODO load plugin names from API
    const pluginNames: string[] = [
        /*'plugin1'*/
    ];

    return Promise.all(
        pluginNames.map(async (p) => {
            // TODO get actual path
            const plugin: Plugin = await import(`../../dist/${p}/esm2022/public-api`);
            return createNgModule<PluginModuleInterface>(plugin.module as any, injector);
        }),
    );
}
