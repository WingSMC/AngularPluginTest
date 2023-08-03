import { NgModule } from '@angular/core';
import { MenuItemComponent } from './components/menu-item.component';
import { Page1Component } from './pages/page1.component';
import { Page2Component } from './pages/page2.component';

@NgModule({
    imports: [Page1Component, Page2Component, MenuItemComponent],
    exports: [Page1Component, Page2Component, MenuItemComponent],
})
export class BaseModule {}
