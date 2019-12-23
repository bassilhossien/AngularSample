import { Component, OnInit } from '@angular/core';

export class ToolCard{
  name:string
  description:string
  img:string

  constructor(n:string, d:string, i:string) { 
    this.name = n;
    this.description = d;
    this.img = i;
  }
}

@Component({
  selector: 'tool-card',
  templateUrl: './tool-card.component.html',
  styleUrls: ['./tool-card.component.css']
})



export class ToolCardComponent implements OnInit {
  toolCardList=[
    new ToolCard("Screen", "33inch wide screen", "scr01"),
    new ToolCard("Desk", "130*150 size with wooden color and shining sirface", "desk01")
    // ,new ToolCard("Chair", "Rotative and leather soft chair, max height 60", "chair01"),
    // new ToolCard("Cabinet", "Double cabinet 220*120*80 dimentions, wooden color", "cabin01"),
  ];

  constructor() { }

  ngOnInit() {
  }

}
