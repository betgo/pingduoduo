import { Pipe, PipeTransform } from '@angular/core';
import { interval } from 'rxjs';

@Pipe({
    name: 'Appago'
})

export class AppagoPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        const second = Math.floor((+new Date() - +new Date(value)) / 1000);
        if(second<30){
            return '刚刚';
        }
        interValues={
            年:3600　*24 
        }
        for (const unitName in interValues) {
            if (interValues.hasOwnProperty(unitName)) {
                const element = interValues[unitName];
                
            }
        }
    }
}