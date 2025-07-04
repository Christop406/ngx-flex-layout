import { APP_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BREAKPOINT, FlexLayoutModule } from 'ngx-flexible-layout';

import { AppComponent } from './app.component';
import { DemoMaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import {
  YBA_BREAKPOINT_PROVIDER
} from './stack-overflow/hide-custom-bp/hide-with-custom-bp.component';
import { WatermarkComponent } from './watermark.component';

const EXTRA_BREAKPOINTS = [{
  alias: 'xs.landscape',
  suffix: 'XsLandscape',
  mediaQuery: 'screen and (orientation: landscape) and (max-width: 559px)',
  priority: 1000,
  overlapping: false
}];

@NgModule({
  declarations: [
    AppComponent,
    WatermarkComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RoutingModule,
    DemoMaterialModule,
    FlexLayoutModule.withConfig({
      useColumnBasisZero: false,
      printWithBreakpoints: ['md', 'lt-lg', 'lt-xl', 'gt-sm', 'gt-xs']
    }),
  ],
  providers: [
    YBA_BREAKPOINT_PROVIDER,
    {
      provide: BREAKPOINT,
      useValue: EXTRA_BREAKPOINTS,
      multi: true
    },
    {provide: APP_ID, useValue: 'serverApp'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
