import { Pipe, PipeTransform } from '@angular/core';
import { Tanque } from '../tanque/tanque';

@Pipe({ name: 'filterByDeposito'})
export class FilterByDepositoPipe implements PipeTransform {

    transform(tanques: Tanque[], textToSearch: string) {

        textToSearch = textToSearch
            .trim()
            .toLowerCase();

        if (textToSearch) {
            return tanques.filter(tanque =>
                tanque.Deposito.toLowerCase().includes(textToSearch)
            );
        } else {
            return tanques;
        }
    }
}
