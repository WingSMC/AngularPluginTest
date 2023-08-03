import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'lib-plugin1-page',
    template: ` <h1>Plugin1 works!</h1> `,
    standalone: true,
    imports: [AsyncPipe],
})
export class Plugin1PageComponent {}
