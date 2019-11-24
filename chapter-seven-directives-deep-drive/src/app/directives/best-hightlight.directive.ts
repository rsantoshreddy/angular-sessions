import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBestHightlight]'
})
export class BestHightlightDirective {
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
  }
  @HostBinding('style.backgroundColor') backgroundColor: string = 'magenta';

  @HostListener('mouseenter') mouseEnter() {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'red');
    this.backgroundColor = 'red';
  }
  @HostListener('mouseleave') mouseLeave() {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }
}
