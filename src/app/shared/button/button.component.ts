import { Component } from '@angular/core';

@Component({
  //atribute selector
  // Use the attribute selector to apply the component to any element
  // it makes it more reusable, and you can use it in any element without having to create a new component
  //extend a build-in component
  selector: 'button[appButton]',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})

// a host element is an element that is used to host a component, its what is in the selector
export class ButtonComponent {}
