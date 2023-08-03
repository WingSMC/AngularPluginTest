import { Component } from '@angular/core';
import { MenubarService } from 'base';

@Component({
    selector: 'app-root',
    template: `
        <div style="min-height: 100vh; display: grid; grid-template-rows: min-content 1fr;">
            <nav
                style="display: flex; justify-content: center; gap: 10px; padding: 10px; border-bottom: 1px solid #673ab7;"
            >
                <ng-container *ngFor="let item of menuBar.menuItems">
                    <menu-item
                        *ngIf="item.show === undefined || (item.show | async)"
                        meta="plugin1"
                        [item]="item"
                        (load)="log()"
                    ></menu-item>
                </ng-container>
            </nav>
            <main
                style="width: clamp(400px, calc(100vw - 40px), 1000px); margin: 0 auto; text-align: center; padding: 10px; border-width: 0 1px; border-style: solid; border-color: #ddd;"
                ><router-outlet
            /></main>
        </div>
    `,
})
export class AppComponent {
    constructor(public readonly menuBar: MenubarService) {}

    log(): void {
        console.log('AppComponent');
    }
}
