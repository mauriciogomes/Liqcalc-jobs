import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moedaBr'
})
export class MoedaBrPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    let strValor = value.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' });

    return strValor;
  }

}
