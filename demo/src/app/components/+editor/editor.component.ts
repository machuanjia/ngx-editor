import { Component, TemplateRef, OnInit } from '@angular/core';
import { NgxEditorService } from '../../../../../src/editor/editor.service';
@Component({
    selector: 'demo-editor',
    templateUrl: './editor.component.html'
})
export class DemoEditorComponent implements OnInit {

    public value = 'this is ngx-editor';

    public config = { type: 'simple', className: 'wt-editor-desc', autofocus: false, autoHeight: true };

    constructor(
        private ngxEditorService: NgxEditorService
    ) {
    }

    ngOnInit() {

    }

}
