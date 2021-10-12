import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {

  cards: Card[] = [
    {title: "title1", text: "text1"},
    {title: "title2", text: "text2"},
    {title: "title3", text: "text3"},
    {title: "title4", text: "text4"}
  ]

  toogleCards = true
  toogleCard(){
    this.toogleCards = !this.toogleCards
  }
  title = 'vladelen cl';
}



export interface Card {
  title: string,
  text: string
}
