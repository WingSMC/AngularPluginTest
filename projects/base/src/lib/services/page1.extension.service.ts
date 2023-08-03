import { Injectable, Type } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class Page1ExtensionService {
    readonly extraComponents: Type<any>[] = [];
}
