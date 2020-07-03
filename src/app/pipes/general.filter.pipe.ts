import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'generalFilter',
    pure: false
})
export class GeneralPipe implements PipeTransform {
    transform(items: any[], filter: any): any {
        if (!items || !filter) {
            return items;
        }
       
        return items.filter((item: any) => this.applyFilter(item, filter));
    }
    
    applyFilter(book: any, filter: any): boolean {
        for (const field in filter) {
            if (book[field]) {
                if (filter[field]) {
                    if (typeof filter[field] === 'string') {
                        
                        if (book[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                            return false;
                        }
                    } else if (typeof filter[field] === 'number') {
                        if (book[field] !== filter[field]) {
                            
                            return false;
                        }       
                    } else if (filter[field] === 'date') {
                        if (book[field] !== filter[field]) {
                           
                            return false;
                        }
                    }
                    
                }
            }

        }
        return true;
    }
}