import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../../app.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() _card!: Card
  @Input() index!: number

  title = "text title"
  text = "Text1"
  disabled = false

  public titleColor: any

  img = "https://static.vecteezy.com/system/resources/previews/001/416/673/original/angular-emblem-white-letter-on-red-vector.jpg"


  constructor() { }

  ngOnInit(): void {
      setTimeout( ()=> {
          this.img = "https://www.markernet.co.jp/blog/wp-content/uploads/2019/08/image5818.png"
          this.disabled = true
      }, 3000)
  }

  changeTitle(){
    this.title = "this change title"
  }

  inputTitle(event: any){
    const valueInputTitle = event.target.value
    this._card.title = valueInputTitle
  }

  ngModelChangeText(){
    console.log(this._card.text)
  }

}
