import { Directive, ElementRef, Renderer2, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
    selector: '[appCustom]'
})
export class CustomDirective implements AfterViewInit {
    // possibleColors = [
    //     'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    //     'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
    // ];

    @Output() B1function = new EventEmitter();
    @Output() B2function = new EventEmitter();
    @Output() B3function = new EventEmitter();
    @Output() B4function = new EventEmitter();
    @Output() B5function = new EventEmitter();
    @Output() B6function = new EventEmitter();
    @Output() B7function = new EventEmitter();
    @Output() B8function = new EventEmitter();
    @Output() B9function = new EventEmitter();
    @Output() B10function = new EventEmitter();
    @Output() B11function = new EventEmitter();
    @Output() B12function = new EventEmitter();
    // @HostBinding('style.color') color: string;
    // @HostBinding('style.border-color') borderColor: string;
    constructor(private elem: ElementRef, renderer: Renderer2) {
        // renderer.setStyle(elem.nativeElement, 'box-shadow', '2px 2px 12px #58A362');
    }
    ngAfterViewInit(): void {
        console.log(this.elem.nativeElement);
    }
    // @HostListener('keydown') newColor() {
    //     alert();
    //     const colorPick = Math.floor(Math.random() * this.possibleColors.length);

    //     this.color = this.borderColor = this.possibleColors[colorPick];
    // }

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvents(event: KeyboardEvent) {
        const keyCode = event.keyCode || event.which;
        if (keyCode === 112) {
            event.preventDefault();
            this.B1function.emit();
        }
    }

}
