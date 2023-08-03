import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    Page1ExtensionService,
    PluginModuleInterface,
    RouterInitializationService,
} from 'base';
import { Plugin1Component } from './components/plugin1.component';
import { Plugin1PageComponent } from './pages/plugin1-page.component';

@NgModule({
    imports: [CommonModule, Plugin1PageComponent, Plugin1Component],
    exports: [Plugin1PageComponent, Plugin1Component],
})
export class Plugin1Module implements PluginModuleInterface {
    public readonly name = 'Plugin1';
    public readonly version = '1.0.0';

    constructor(
        routerInitService: RouterInitializationService,
        page1ExtensionService: Page1ExtensionService,
    ) {
        routerInitService.addMenuRoute({
            title: 'Plugin 1',
            path: 'plug1',
            icon: 'extension',
            component: Plugin1PageComponent,
        });
        page1ExtensionService.extraComponents.push(Plugin1Component);
    }
}
