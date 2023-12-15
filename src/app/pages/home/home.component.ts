import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';


type DataFake =  {
      "id": string
      "title": string
      "description": string
      "photoCover":string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  data:DataFake[] 
  firstTwoItems:DataFake[]

  constructor() { 
    this.data = dataFake;
    this.firstTwoItems = this.data.slice(0,2)
  }
  
  ngOnInit(): void {
    console.log(this.data)
  }

}
