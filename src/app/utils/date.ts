export class DateUtils {
    public static ToFormStringFormat(date: Date): string {
        if (date === null || date === undefined) {
            return '';
        } else {
            return date.toISOString().slice(0, 10);
        }
    }
}
