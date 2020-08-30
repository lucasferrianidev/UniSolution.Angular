import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { TanqueFormService } from './tanque-form.service';
import { DepositoNaoExistenteValidatorService } from './deposito-nao-existente.validator.service';
import { TanqueService } from '../tanque/tanque.service';
import { Tanque } from '../tanque/tanque';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HostListener } from '@angular/core';


@Component({
  templateUrl: './tanque-form.component.html'
})
export class TanqueFormComponent implements OnInit {
  titulo = '';

  tanqueForm: FormGroup;
  estaAlterando = false;
  alteracao$: Observable<Tanque>;
  deposito: string;

  constructor(
    private formBuilder: FormBuilder,
    private tanqueFormService: TanqueFormService,
    private router: Router,
    private depositoNaoExistenteValidatorService: DepositoNaoExistenteValidatorService,
    private route: ActivatedRoute,
    private tanqueService: TanqueService
  ) {}

  ngOnInit(): void {

    this.tanqueForm = this.formBuilder.group({
      deposito: [
        '',
        Validators.required
      ],
      capacidade: [
        '',
        [
          Validators.required,
          Validators.min(0.01),
          Validators.pattern(/^[-+]?(?:[0-9]+,)*[0-9]+(?:\.[0-9]+)?$/)
        ]
      ],
      tipoDeProduto: [
        '',
        Validators.required]
    });

    const id = this.route.snapshot.params.deposito;

    this.titulo = 'Cadastrar Tanque';
    // se tem id é para alterar senao é para inserir
    if (id !== undefined) {
      this.deposito = id;
      this.estaAlterando = true;
      this.titulo = 'Alterar Tanque';
      this.tanqueFormService
        .getDepositoById(id)
        .subscribe(tanque => {
            this.tanqueForm.controls.deposito.setValue(tanque.Deposito);
            this.tanqueForm.controls.deposito.disable();
            this.tanqueForm.controls.capacidade.setValue(tanque.Capacidade);
            this.tanqueForm.controls.tipoDeProduto.setValue(tanque.TipoDeProduto);
        });
    }
  }

  submeterDados(): void {
    console.log('cheguei aqui oh');
    const deposito = this.tanqueForm.get('deposito').value;
    const capacidade = this.tanqueForm.get('capacidade').value;
    const tipoDeProduto = this.tanqueForm.get('tipoDeProduto').value;

    // vou validar se vai pro método gravar ou alterar.
    if (this.estaAlterando) {
      this.alteracao$ = this.tanqueFormService
        .alterar(deposito, capacidade, tipoDeProduto);
    } else {
      this.alteracao$ = this.tanqueFormService
        .gravar(deposito, capacidade, tipoDeProduto);
    }

    this.alteracao$
      .subscribe(
        () => {
          alert('Gravado com SUCESSO!');
          this.router.navigate(['listar']);
        },
        (err) => {
          console.log(err);
          this.tanqueForm.reset();
          alert('Erro ao gravar! Tente mais tarde novamente.');
        }
      );
  }

  remover(deposito: string): void {
    console.log('log1: ' + deposito);

    this.tanqueFormService
        .removeTanque(this.deposito)
        .subscribe(
            () => {
              console.log('removido com sucesso');
              alert('Removido com SUCESSO!');
              this.router.navigate(['']);
            },
            err => {
              console.log(err);
              alert('Erro ao remover Tanque! Tente mais tarde novamente.');
            }
          );
}
}
