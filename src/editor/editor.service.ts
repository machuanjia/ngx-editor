import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class NgxEditorService implements OnInit {

    constructor() {

    }

    ngOnInit() {

    }

    // initGantt() {
    //     if (window.mermaid) {
    //         mermaid.parseError = function (err, hash) {
    //             mermaid.error = err;
    //         };
    //         mermaid.ganttConfig = {
    //             // Configuration for Gantt diagrams
    //             numberSectionStyles: 4,
    //             axisFormatter: [
    //                 ['%I:%M', function (d) { // Within a day
    //                     return d.getHours();
    //                 }],
    //                 ['w. %U', function (d) { // Monday a week
    //                     return d.getDay() === 1;
    //                 }],
    //                 ['%a %d', function (d) { // Day within a week (not monday)
    //                     return d.getDay() && d.getDate() !== 1;
    //                 }],
    //                 ['%b %d', function (d) { // within a month
    //                     return d.getDate() !== 1;
    //                 }],
    //                 ['%m-%y', function (d) { // Month
    //                     return d.getMonth();
    //                 }]
    //             ]
    //         };
    //     }
    // };



}
