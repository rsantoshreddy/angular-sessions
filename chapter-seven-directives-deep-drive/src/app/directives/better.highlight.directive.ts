import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
  }
  @HostListener('mouseenter') mouseEnter() {
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'red');
  }
  @HostListener('mouseleave') mouseLeave() {
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'yellow');
  }
}
