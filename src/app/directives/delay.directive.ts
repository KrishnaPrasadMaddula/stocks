import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[delay]'
})
export class DelayDirective {

  @Input() set delay(ms: number) {
    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }, ms)
  }
  constructor(private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>) { }



}
