import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";


@Pipe({
  name: 'imagenBd',
})
export class ImagenBdPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  constructor(private domSanitizer: DomSanitizer){

  }

  transform(value: string, ...args) {
    console.log('PIPE DE DOMSANITIZER');
    /*  value = value.substr(0,22);
      value = value.substr(value.length-1,1);*/
    console.log(JSON.stringify(this.domSanitizer.bypassSecurityTrustResourceUrl(value)));
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }
}