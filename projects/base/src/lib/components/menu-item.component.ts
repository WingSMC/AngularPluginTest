import { NgIf } from '@angular/common'
import { Component, Input } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { RouterModule } from '@angular/router'
import type { MenuLink } from '../services/menubar.service'

@Component({
    selector: 'menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.css'],
    standalone: true,
    imports: [RouterModule, MatIconModule, NgIf],
})
export class MenuItemComponent {
    @Input({ required: true }) item!: MenuLink;

    click(e: MouseEvent) {
        console.log('MenuItem click');
    }
}
