import { Directive, ElementRef, Renderer2, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPassingValues]'
})
export class PassingValuesDirective {
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }
  @Input() defaultColor = 'cyan';
  @Input() hightColor = 'blueviolet';
  // @Input('appPassingValues') hightColor = 'blueviolet';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') mouseEnter() {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'red');
    this.backgroundColor = this.hightColor;
  }
  @HostListener('mouseleave') mouseLeave() {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.defaultColor;
  }
}
