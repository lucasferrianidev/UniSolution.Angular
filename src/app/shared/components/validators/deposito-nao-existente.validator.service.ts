import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { debounceTime, switchMap, map, first, catchError } from 'rxjs/operators';

import { TanqueFormService } from '../../../tanques/tanque-form/tanque-form.service';

@Injectable(
    { providedIn: 'root' }
)
export class DepositoNaoExistenteValidatorService {
    constructor(private tanqueFormService: TanqueFormService) {}
    // essa função retorna uma FUNÇÃO de validação
    verificaDepositoNaoExistente():
        (control: AbstractControl) => Observable<any> {
        //  essa função retorna null caso nao tenha erro de validação e um objeto caso tenha
        return (control: AbstractControl) => {
            return control.valueChanges
                .pipe(debounceTime(300))
                .pipe(
                    // cancela o fluxo anterior e começa ouvir este novo com switchMap
                    switchMap((deposito) => this.tanqueFormService.verificaDepositoNaoExiste(deposito))
                )
                .pipe(
                    // verifica se tem resultado, se sim eh erro então envia objeto js senão envia null (nenhum erro)
                    map((depositoExistente) =>  (depositoExistente) ? { depositoExistente: true } : null),
                    // algumas APIs retornam um erro como 404 not found, por isso devo tratart aqui e mandar null
                    catchError(() => of(null))
                )
                // para completar pega a primeira emissão
                .pipe(first());
        };
    }
}
