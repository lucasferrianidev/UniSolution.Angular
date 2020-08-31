import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { TanqueFormComponent } from './tanque-form.component';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [
        TanqueFormComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule,
        ReactiveFormsModule,
        VMessageModule,

    ]
})
export class TanqueFormModule {}
