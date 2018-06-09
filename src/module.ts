import { Component, NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ThyButtonModule } from './button';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserAnimationsModule,
        ThyButtonModule
    ],
    exports: [
        BrowserAnimationsModule,
        ThyButtonModule
    ],
    providers: [
    ]
})
export class NgxEditorModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgxEditorModule,
            providers: []
        };
    }
}
