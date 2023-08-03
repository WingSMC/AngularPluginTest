import { NgIf } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from 'base';
import { Subject } from 'rxjs';

@Component({
    selector: 'plugin1-menu-item',
    templateUrl: '../../../../base/src/lib/components/menu-item.component.html',
    styleUrls: ['../../../../base/src/lib/components/menu-item.component.css'],
    standalone: true,
    imports: [RouterModule, MatIconModule, NgIf],
})
export class Plugin1MenuItemComponent extends MenuItemComponent implements OnInit {
    @Input({ required: true }) meta!: string;
    @Output() load = new Subject<void>();
    ngOnInit(): void {
        console.log('Plugin1MenuItemComponent ngOnInit', this.meta, this.item);
    }

    override click(e: MouseEvent): void {
        console.log('Plugin1MenuItemComponent click', this.meta, this.item);
        super.click(e);
        this.load.next();
    }
}
