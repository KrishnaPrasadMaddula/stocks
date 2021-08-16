import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[cardHover]'
})
export class CardHoverDirective implements OnInit {

  card: any;

  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    this.card = this.el.nativeElement.querySelector('.mdl-card');

    if (this.card.classList.contains('increase')) {
      this.card.style.backgroundColor = 'rgb(63,81,181)';
    } else if (this.card.classList.contains('decrease')) {
      this.card.style.backgroundColor = 'rgb(255,171,64)';
    } else {
      this.card.style.backgroundColor = '';
    }
  }

  @HostListener('mouseover') onMouseOver() {
    this.card.style.boxShadow = '4px 4px 2px #999';
    this.card.style.top = '-4px';
  }

  @HostListener('mouseout') onMouseOt() {
    this.card.style.boxShadow = '';
    this.card.style.top = '';
  }

}
