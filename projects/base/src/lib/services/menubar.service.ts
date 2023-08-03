import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface MenuLink {
    readonly title: string;
    readonly path: string;
    readonly icon?: string;
    readonly show?: BehaviorSubject<boolean>;
}

@Injectable({
    providedIn: 'root',
})
export class MenubarService {
    readonly menuItems: MenuLink[] = [
        {
            title: 'Home',
            path: '',
            icon: 'home',
            show: new BehaviorSubject<boolean>(true),
        },
        {
            title: 'Page 2',
            path: 'page2',
            icon: 'contact_support',
        },
    ];

    addMenuItem(menuItem: MenuLink) {
        this.menuItems.push(menuItem);
    }

    removeMenuItem(path: string) {
        const index = this.menuItems.findIndex((r) => r.path === path);
        if (index === -1) throw new Error(`Route ${path} is not in menu`);
        this.menuItems.splice(index, 1);
    }

    replaceMenuItem(menuItem: MenuLink) {
        const index = this.menuItems.findIndex((r) => r.path === menuItem.path);
        if (index === -1) throw new Error(`Route ${menuItem.path} is not in menu`);
        this.menuItems[index] = menuItem;
    }
}
