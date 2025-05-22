import {
  Component,
  contentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    //(click) => 'onClick($event)',
  },
})
export class ControlComponent {
  private el = inject(ElementRef);
  //this input references the new ticket component input and textarea
  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;
  //not recommended to use this
  //@HostBinding('class') className = 'control';
  label = input.required<string>();
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  onClick() {
    console.log('el', this.el);
    console.log('control', this.control);
  }
}
