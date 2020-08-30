import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TanqueComponent } from './tanque.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [TanqueComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule
    ],
    exports: [TanqueComponent]
})
export class TanqueModule {}
