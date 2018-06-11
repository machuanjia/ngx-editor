import { Component, Directive, Input, ElementRef, Renderer2, ViewEncapsulation, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, FormsModule } from '@angular/forms';
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

    @Input('config')
    set config(value: {}) {
    }

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
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

    ngOnInit() {
    }
}
