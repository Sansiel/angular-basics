import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './appchild2.component.html',
  styleUrls: ['./appchild2.component.css']
})
export class Appchild2Component implements OnInit {
  toggle = false;
  arr=[1,1,2,3,5,8,13]
  objs = [
    {title:"Post 1", author:"Beth", comments:[
      {name:"Max", text:"lorem 1"},
      {name:"Max", text:"lorem 2"},
      {name:"Max", text:"lorem 3"}
    ]},
    {title:"Post 2", author:"Beth 2", comments:[
      {name:"Max 2", text:"lorem 1"},
      {name:"Max 2", text:"lorem 2"},
      {name:"Max 2", text:"lorem 3"}
    ]}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
