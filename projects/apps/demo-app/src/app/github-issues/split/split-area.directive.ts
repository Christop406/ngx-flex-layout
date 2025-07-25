import { Directive, Optional, Self } from '@angular/core';
import { DefaultFlexDirective } from 'ngx-flexible-layout';

@Directive({
  selector: '[ngxSplitArea]',
  host: {
    style: 'overflow: auto;'
  },
  standalone: false
})
export class SplitAreaDirective {
  constructor(@Optional() @Self() public flex: DefaultFlexDirective) {}
}
