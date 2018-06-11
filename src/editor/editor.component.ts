import { Component, Directive, Input, ElementRef, Renderer2, ViewEncapsulation, OnInit } from '@angular/core';
@Component({
    selector: '[ngx-editor],[ngxEditor]',
    templateUrl: './editor.component.html'
})
export class NgxEditorComponent implements OnInit {

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
    ) {
    }

    ngOnInit() {
    }
}
