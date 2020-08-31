import { NgModule } from '@angular/core';
import { DepositoNaoExistenteValidatorService } from './deposito-nao-existente.validator.service';

@NgModule({
    declarations: [DepositoNaoExistenteValidatorService],
    exports: [DepositoNaoExistenteValidatorService]
})
export class ValidatorsModule {
}
