import { Component, Input, ElementRef, Renderer2, OnInit, forwardRef, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgxEditorService } from './editor.service';
@Component({
    selector: 'ngx-editor',
    templateUrl: './editor.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgxEditorComponent),
        multi: true
    }]
})
export class NgxEditorComponent implements OnInit, ControlValueAccessor {

    // <wt-editor ng-model="vm.temp.description" ctrl-enter="vm.updateDescription()"
    // config="{type:'simple',className:'wt-editor-desc',autofocus:false,autoHeight:true}"></wt-editor>

    public model: any;

    @Input() config: {};

    public className: String = '';

    public header_action: Boolean = false;

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
        public ngxEditorService: NgxEditorService,
    ) {
    }

    writeValue(value: any) {
        this.model = value;
    }

    registerOnChange(fn: Function) {
        this.onModelChange = fn;
    }

    registerOnTouched(fn: Function) {
        this.onModelTouched = fn;
    }

    public onModelChange: Function = () => {

    }

    public onModelTouched: Function = () => {

    }

    changeValue(event: Event) {
        this.model = event;
        this.onModelChange(this.model);
    }

    setHeaderLi(id: string): void {
        this.header_action = !this.header_action;
    }

    styleFn(name: string, event: Event) {

    }


    ngOnInit(): void {
        this.ngxEditorService.initEditor(this.config, this.elementRef);
    }
}
