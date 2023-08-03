import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Page1ExtensionService } from '../services/page1.extension.service';

@Component({
    selector: 'app-page1',
    template: `
        <h1>Page 1</h1>
        <ng-container
            *ngFor="let component of extensionService.extraComponents"
            [ngComponentOutlet]="component"
        ></ng-container>
    `,
    standalone: true,
    imports: [CommonModule],
})
export class Page1Component {
    constructor(public extensionService: Page1ExtensionService) {}
}
