import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TanqueService } from './tanque.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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

    constructor(
        private tanqueService: TanqueService,
        private router: Router
    ) { }

    editar(): void {
      console.log('editar');
    }
}
