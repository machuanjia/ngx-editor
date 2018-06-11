import { Injectable, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ngxEditorConstant } from './editor.constant';
import * as _ from 'lodash';

@Injectable()
export class NgxEditorService implements OnInit, OnDestroy {
    public options = {
        fontSize: '16px',
        theme: 'kuroir',
        maxHeight: 600,
        className: '',
        autofocus: true, // 默认聚焦
        type: 'simple', // toolbar按钮显示的类型 ［simple:简易, all:全部按钮］
        quickSearch: {},
        locale: 'zh-cn', // 国际化设置[未]
        hideButtons: <any>[],
        additionalButtons: <any>[],
        replaceButtons: <any>[],
        extendButtons: <any>[]
    };
    // public hideButtons: any = []; // 要不显示的图标[]
    // public additionalButtons: any = []; // 扩展的图标 {title:'扩展',className:'fa fa-music',type:'custom',action:musicFn,before:2}
    // public replaceButtons: any = []; // 替换默认的图标 {title:'插入图片',className:'fa fa-file-image-o',type:'custom',action:imageFn,id:17}
    // public extendButtons: any = [];
    public toolbars: any = [];
    public headers: any = [];
    public elementRef: ElementRef;
    public textareaDom: any;


    constructor() {

    }

    ngOnInit() {

    }

    ngOnDestroy() {

    }

    initGantt() {

    }

    setOptions(config: {}) {
        if (config) {
            this.options = _.assignIn(this.options, config);
        }
    }

    setToolbars() {
        ngxEditorConstant.typeArray[this.options.type].forEach((value: string, index: number) => {
            let _tempBtn = ngxEditorConstant.allButtons[value];
            if (!_tempBtn) {
                _tempBtn = this.options.extendButtons[value];
            }
            if (_tempBtn) {
                this.toolbars[this.toolbars.length] = _tempBtn;
            }
        });

        ngxEditorConstant.typeArray['hs'].forEach((value: string, index: number) => {
            const _tempBtn = ngxEditorConstant.allButtons[value];
            if (_tempBtn) {
                this.headers[this.headers.length] = _tempBtn;
            }
        });

        _.remove(this.toolbars, (n: any) => {
            if (n.id) {
                return _.indexOf(this.options.hideButtons, n.id) !== -1;
            }
        });

        if (this.options.replaceButtons.length > 0) {
            this.options.replaceButtons.forEach((n: any) => {
                if (n.id) {
                    const _index = _.findLastIndex(this.toolbars, (t: any) => {
                        return n.id === t.id;
                    });
                    this.toolbars.splice(_index, 1, n);
                }
            });
        }

        if (this.options.additionalButtons.length > 0) {
            this.options.additionalButtons.forEach((n: any) => {
                if (n.before) {
                    const _index = _.findLastIndex(this.toolbars, (t: any) => {
                        return t.id === n.before;
                    });
                    this.toolbars.splice(_index, 0, n);
                } else {
                    this.toolbars.push(n);
                }
            });
        }
    }

    initEditor(config: {}, elementRef: ElementRef) {
        this.setOptions(config);
        this.elementRef = elementRef;
        this.textareaDom = this.elementRef.nativeElement.querySelector('.ngx-editor-textarea');
        this.setToolbars();
    }

    getSelection() {
        // const ta = $scope.vm.editor;
        // return {
        //     target: ta,
        //     start: ta.selectionStart,
        //     end: ta.selectionEnd,
        //     text: ta.value.substring(ta.selectionStart, ta.selectionEnd)
        // };
    }

    hasSelection() {

    }
    getRowText() {

    }

    // 插入markdown
    styleFn(param: string, event: Event) {

    }

    clear() {

    }
}
