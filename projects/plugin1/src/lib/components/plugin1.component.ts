import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'lib-plugin1-component',
    standalone: true,
    imports: [CommonModule],
    template: `
        <p
            style="background-color: aqua;"
            i18n
            >plugin1-component</p
        >
    `,
})
export class Plugin1Component {}
