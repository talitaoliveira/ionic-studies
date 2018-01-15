import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ContaPagar } from '../../model/contapagar';
import { ContaReceber } from '../../model/contareceber';

/*
  Generated class for the RegistrosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegistrosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RegistrosProvider Provider');
  }

  getContasPagar(){

    let contaspagar: ContaPagar[] = [
      { id: 1,
        description: 'Despesa com comida',
        value: 10.2,
        date: new Date(2018,1,18)
      },
      { id: 2,
        description: 'Despesa com produtos de limpeza',
        value: 53.5,
        date: new Date(2018,1,15)
      }
    ]

    return contaspagar

  }

  getContasReceber(){

    let contasreceber: ContaReceber[] = [
      { id: 1,
        description: 'Salário',
        value: 500,
        date: new Date(2018,1,18)
      },
      { id: 2,
        description: 'Dinheiro emprestado de Fulano',
        value: 20.5,
        date: new Date(2018,1,15)
      }
    ]

    return contasreceber

  }

}
