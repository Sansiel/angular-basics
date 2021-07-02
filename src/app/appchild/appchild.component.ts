import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './appchild.component.html',
  styleUrls: ['./appchild.component.css']
})
export class AppChildComponent {
  title = 'Ниже KeyBoard Event';
  inputValue = '';
  arr = [1,2,3];
  now : Date = new Date()

  constructor(){}

  onInput(event: KeyboardEvent) {
    console.log('Event', event)
    this.inputValue = (<HTMLInputElement>event.target).value
  }

  onBlur(str: string) {
    console.log(str)
  }

  onClick() {
    console.log('Click')
  }
}

