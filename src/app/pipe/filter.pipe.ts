/* code to change character casing for large to small and vice versa for the purporse of searching*/

import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], value: string, prop: string): any[] {
        if (!items) return [];
        if (!value) return items;

        return items.filter(singleItem =>
            singleItem[prop].toLowerCase().startsWith(value.toLowerCase())
        );
   
    }
}