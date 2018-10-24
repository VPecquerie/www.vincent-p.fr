import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';
import { isNullOrUndefined } from 'util';

@Pipe({name: 'momentjs'})
export class MomentJsPipe implements PipeTransform {

    private locale = 'fr';

    transform(value, format?: string) {
        if (isNullOrUndefined(value)) {
            return '';
        }
        if (!moment(value).isValid()) {
            return 'Format de date invalide';
        }
        if (format) {
            return moment(value).locale(this.locale).format(format);
        } else {
            return moment(value).locale(this.locale).format('DD/MM/YYYY');
        }
    }
}
