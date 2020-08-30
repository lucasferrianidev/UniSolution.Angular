import { NgModule } from '@angular/core';

import { TanqueModule } from './tanque/tanque.module';
import { TanqueFormModule } from './tanque-form/tanque-form.module';
import { TanquesListModule } from './tanques-list/tanques-list.module';
import { AppRoutingModule } from '../app.routing.module';

@NgModule({
    imports: [
        TanqueModule,
        TanqueFormModule,
        TanquesListModule,
        AppRoutingModule
    ]
})
export class TanquesModule {}
