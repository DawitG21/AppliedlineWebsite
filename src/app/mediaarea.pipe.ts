import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
name: 'mediaarea'
})
export class MediaareaPipe implements PipeTransform {

transform(value: any, args?: any): any {
return null;
}

}
