import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './directives/basic.highlight.directive';
import { BetterHighlightDirective } from './directives/better.highlight.directive';
import { BestHightlightDirective } from './directives/best-hightlight.directive';
import { PassingValuesDirective } from './directives/passing-values.directive';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
  declarations: [AppComponent, BasicHighlightDirective, BetterHighlightDirective, BestHightlightDirective, PassingValuesDirective, UnlessDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
