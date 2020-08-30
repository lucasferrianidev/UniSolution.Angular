import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TanquesModule } from './tanques/tanques.module';
import { ErrorsModule } from './errors/errors.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    // aqui são os componentes
    AppComponent
  ],
  imports: [
    // importando os módulos temos acesso a todos seus componentes
    BrowserModule,
    AppRoutingModule,
    TanquesModule,
    ErrorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
