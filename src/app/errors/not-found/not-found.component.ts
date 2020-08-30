import { Component, OnInit } from '@angular/core';

// usado quando a rota não existe
@Component({
  selector: 'us-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
