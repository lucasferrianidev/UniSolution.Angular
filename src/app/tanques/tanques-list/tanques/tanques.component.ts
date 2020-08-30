import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Tanque } from '../../tanque/tanque';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'us-tanques',
  templateUrl: './tanques.component.html',
  styleUrls: ['./tanques.component.css']
})
export class TanquesComponent implements OnChanges {

  // inbound property que será preenchida no objeto usado em qq lugar
  @Input() tanques: Tanque[] = [];

  // property que será usada para iterar e acessar os dados dos tanques
  rows: Tanque[] =  [];

  constructor() { }

  // precisei usar o OnChanges pois com OnInit ele era executado uma vez só, antes de ter o resultado
  ngOnChanges(changes: SimpleChanges): void {
    this.rows = this.groupColumns(this.tanques);
  }

  // faz uma separação dos tanques e divide em linhas de 2 tanques
  groupColumns(tanques: Tanque[]): Tanque[] {
    const newRows = [];

    for (let index = 0; index < tanques.length; index += 2){
      newRows.push(tanques.slice(index, index + 3));
    }

    return newRows;
  }

}
