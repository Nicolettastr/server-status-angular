import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    console.log('on init method');
  }

  add = output<{ title: string; text: string }>();

  //@ViewChild("form") private form: ElementRef<HTMLFormElement>;
  private form = viewChild<ElementRef<HTMLFormElement>>('form'); //angular 17+

  //guarantees that we have access to the elements after the view is initialized
  ngAfterViewInit(): void {
    console.log('form', this.form);
  }

  onSubmit(title: HTMLInputElement, text: HTMLTextAreaElement) {
    console.log('Form submitted', title.value);
    this.add.emit({
      title: title.value,
      text: text.value,
    });
    this.form()?.nativeElement.reset();
    //if private form is used them form is called as a signal
    //this.form().nativeElement.reset();

    //form.reset();
  }
}
