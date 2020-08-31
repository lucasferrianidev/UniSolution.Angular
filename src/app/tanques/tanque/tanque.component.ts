import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { TanqueService } from './tanque.service';

@Component({
    selector: 'us-tanque',
    templateUrl: 'tanque.component.html',
    styleUrls: ['tanque.component.css']
})
export class TanqueComponent {

    // propriedades que serão usadas para montar o componente tanque
    @Input() deposito = '';
    @Input() capacidade = '';
    @Input() tipoDeProduto = '';
}
