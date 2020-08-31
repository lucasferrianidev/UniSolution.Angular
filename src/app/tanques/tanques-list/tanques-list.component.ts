import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { TanqueService } from '../tanque/tanque.service';
import { Tanque } from '../tanque/tanque';

@Component({
  selector: 'us-tanques-list',
  templateUrl: './tanques-list.component.html',
  styleUrls: ['./tanques-list.component.css']
})
export class TanquesListComponent implements OnInit, OnDestroy {

  // property que será preenchida pelo back end, pelo subscribe
  tanques: Tanque[] = [];
  filtro = '';
  debounce: Subject<string> = new Subject<string>();

  constructor(private tanqueService: TanqueService){ }

  ngOnInit(): void {

    this.tanqueService
      .getAll()
      .subscribe(tanques => this.tanques = tanques);

    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filtro => this.filtro = filtro);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
