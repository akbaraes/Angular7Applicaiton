import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({selector:'[MyDirective]'})
export class Sampledirective {
    /**
     *
     */
    constructor(private el:ElementRef) {
    }
    @HostListener('mouseenter') onmouseenter(){
        this.highlightcolor('Red');
    }
    @HostListener('mouseleave') onmouseleave(){
        this.highlightcolor(null);
    }
    private highlightcolor(color:string){
        this.el.nativeElement.style.backgroundColor = color;

    }
}
