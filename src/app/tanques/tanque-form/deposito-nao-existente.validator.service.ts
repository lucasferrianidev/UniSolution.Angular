import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { TanqueFormService } from './tanque-form.service';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DepositoNaoExistenteValidatorService {

    constructor(private tanqueFormService: TanqueFormService) {}

    // essa função retorna uma FUNÇÃO de validação
    verificaDepositoNaoExistente() {

        //  essa função retorna null caso nao tenha erro de validação e um objeto caso tenha
        return (control: AbstractControl) => {
            return control.valueChanges
                .pipe(debounceTime(500))
                .pipe(
                    switchMap((deposito) => this.tanqueFormService.verificaDepositoExiste(deposito))
                )
                .pipe(
                    map((depositoExistente) =>  depositoExistente ? { depositoExistente: true } : null)
                )
                .pipe(first());
        };
    }
}
