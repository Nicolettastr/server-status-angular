import { Component, input, ViewEncapsulation } from '@angular/core';

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
  //not recommended to use this
  //@HostBinding('class') className = 'control';
  label = input.required<string>();
}
