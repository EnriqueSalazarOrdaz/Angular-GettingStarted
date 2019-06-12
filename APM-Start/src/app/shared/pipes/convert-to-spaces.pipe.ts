import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'convertToSpaces'
})


export class ConvertToSpaces implements PipeTransform {
    transform(frase: string, character: string): string {
        return frase.replace(character,' ');
    }
}