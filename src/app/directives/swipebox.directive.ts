import { Directive, ElementRef, Input } from '@angular/core';
import * as $ from 'jquery';

@Directive({ selector: '[swipeboxer]' })
export class SwipeDirective {
  constructor() {
    $( '.swipebox' ).swipebox({loopAtEnd: true});
  }
}
