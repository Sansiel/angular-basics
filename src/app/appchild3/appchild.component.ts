import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child3',
  template: `
    <div class="appchild3">
        <h4> APP child 3 </h4>
    </div>
  `,
  styles: [`
        .appchild3{
            width: 450px;
            border: 3px dashed #fcc;
            padding: 1px;
        }
    `] 
})
export class Appchild3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
