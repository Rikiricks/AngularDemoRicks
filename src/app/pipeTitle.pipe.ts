import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'pipeTitle'
})

export class PipeTitle implements PipeTransform{
    transform(value: any, index: number) {
        return index.toString() + '. ' + value;
    }
}
