export class StringUtils {
    public static Capitalize(text: string): string {
        if (text === null || text === undefined) {
            return text.charAt(0).toLocaleUpperCase() + text.slice(1);
        } else {
            return '';
        }
    }
}
