import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'tempUnit'
})

export class TempUnitPipe implements PipeTransform {
    transform (temp: number, tempUnit: string ) {
        switch(tempUnit) {
            case "celsius":
            const celsius = (temp - 32) * 0.5556;
            return celsius;
            default:
            return temp;
        }
    }
}