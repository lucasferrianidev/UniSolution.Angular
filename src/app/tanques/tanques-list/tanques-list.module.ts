import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { TanquesListComponent } from './tanques-list.component';
import { TanquesComponent } from './tanques/tanques.component';
import { FilterByDepositoPipe } from './filter-by-deposito.pipe';
import { TanqueModule } from '../tanque/tanque.module';

@NgModule({
    declarations: [
        TanquesListComponent,
        TanquesComponent,
        FilterByDepositoPipe
    ],
    imports: [
        CommonModule,
        TanqueModule,
        RouterModule
    ]
})
export class TanquesListModule {}
