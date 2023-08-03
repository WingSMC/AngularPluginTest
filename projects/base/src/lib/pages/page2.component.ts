import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-page2',
    standalone: true,
    template: `<h1>Page 2</h1>`,
    imports: [CommonModule],
})
export class Page2Component {
    constructor() {}
}
