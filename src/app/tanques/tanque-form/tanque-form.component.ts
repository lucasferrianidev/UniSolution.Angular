import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { TanqueFormService } from './tanque-form.service';
import { Tanque } from '../tanque/tanque';
import { DepositoNaoExistenteValidatorService } from '../../shared/components/validators/deposito-nao-existente.validator.service';



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
    private route: ActivatedRoute,
    private depositoValidator: DepositoNaoExistenteValidatorService
  ) {}

  ngOnInit(): void {

    this.tanqueForm = this.formBuilder.group({
      deposito: [
        '',
        Validators.required,
        this.depositoValidator.verificaDepositoNaoExistente() // async validator
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
          alert('Gravado com sucesso!');
          this.router.navigate(['listar']);
        },
        (err) => {
          console.log(err);
          this.tanqueForm.reset();
          alert('Erro ao gravar! Tente novamente mais tarde.');
        }
      );
  }

  remover(deposito: string): void {

    this.tanqueFormService
        .removeTanque(this.deposito)
        .subscribe(
            () => {
              console.log('Removido com sucesso!');
              alert('Removido com sucesso!');
              this.router.navigate(['']);
            },
            err => {
              console.log(err);
              alert('Erro tentar remover! Tente novamente mais tarde.');
            }
          );
  }
}
