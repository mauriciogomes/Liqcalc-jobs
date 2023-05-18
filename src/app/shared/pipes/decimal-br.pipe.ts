import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalBr'
})
export class DecimalBrPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let valorFormatado = '';

    //if (value - Math.floor(value) > 0 ){
      let decimal = value.toFixed(2);
      valorFormatado = decimal.replace('\.','\,');
    //}else{
      //valorFormatado = value.toString();
    //}

    return valorFormatado;
  }

}
