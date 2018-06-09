import { Component, Directive, Input, ElementRef, Renderer2, ViewEncapsulation, OnInit } from '@angular/core';
@Component({
    selector: '[thy-button],[thyButton]',
    templateUrl: './button.component.html'
})
export class ThyButtonComponent implements OnInit {

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
    ) {
    }

    ngOnInit() {
    }
}
