import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'espar'
})
export class EsParPipe implements PipeTransform{

    transform(value: any) {
        return value + " " + ((value % 2 == 0) ? "(PAR)" : "(IMPAR)");
    }

}