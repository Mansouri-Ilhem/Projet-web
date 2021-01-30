import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appInscriptionDisabled]'
})
export class InscriptionDisabledDirective {
  
  @HostBinding('class.link-is-disabled') status: boolean;
  @Input()
  set appInscriptionDisabled(value) {
  this.status = value;
  }
  constructor() { }
}
