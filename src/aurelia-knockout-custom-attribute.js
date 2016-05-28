import {inject} from 'aurelia-dependency-injection';
import {customAttribute} from 'aurelia-templating';

@customAttribute('knockout')
@inject(Element)
export class KnockoutCustomAttribute {

  constructor(element) {
    this.element = element;
  }

  bind(executionContext) {
    ko.applyBindings(executionContext, this.element);
  }

  unbind() {
    ko.cleanNode(this.element);
  }
}
