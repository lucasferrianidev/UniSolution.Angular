import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TanqueFormComponent } from './tanques/tanque-form/tanque-form.component';
import { TanquesListComponent } from './tanques/tanques-list/tanques-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { TanquesComponent } from './tanques/tanques-list/tanques/tanques.component';

// constante que guarda as rotas e seus respectivos componentes, faz um de para
const routes: Routes = [
  {
    path: 'listar',
    component: TanquesListComponent
  },
  {
    path: 'adicionar',
    component: TanqueFormComponent
  },
  {
    path: 'adicionar/:deposito',
    component: TanqueFormComponent
  },
  {
    path: '',
    component: TanquesListComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }, // qualquer valor após o domínio "localhost:4200"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
