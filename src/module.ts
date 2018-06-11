import { Component, NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEditorComponent } from './editor/editor.component';

@NgModule({
    declarations: [
        NgxEditorComponent
    ],
    imports: [
        BrowserAnimationsModule,
    ],
    exports: [
        BrowserAnimationsModule,
        NgxEditorComponent
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
