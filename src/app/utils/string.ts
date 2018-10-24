import { isNullOrUndefined } from 'util';

export class StringUtils {

    public static Capitalize(text: string): string {
        if (!isNullOrUndefined(text)) {
            return text.charAt(0).toLocaleUpperCase() + text.slice(1);
        } else {
            return '';
        }
    }
}
