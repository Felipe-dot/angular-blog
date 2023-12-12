import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://topcinema.com.br/wp-content/uploads/2023/10/cats-2023-10-17T151053.435.jpg"
  contentTitle: string = "Minha noticia"
  contentDescription: string = "ola mundo"


  constructor() { }

  ngOnInit(): void {
  }

}
