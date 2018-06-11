import { Component, NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEditorComponent } from './editor/editor.component';
import { NgxEditorService } from './editor/editor.service';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        NgxEditorComponent
    ],
    imports: [
        BrowserAnimationsModule,
        FormsModule
    ],
    exports: [
        BrowserAnimationsModule,
        NgxEditorComponent
    ],
    providers: [
        NgxEditorService
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
