const hasOwnProperty = Object.prototype.hasOwnProperty;;

export const utils = {
    /**
     * Extend properties of one object with one or more Objects
     * @param obj Object to extend
     * @returns Object
     */
    extend: function <T>(obj: T, ...sources: Partial<T>[]): T {
        if (typeof obj !== 'object' || obj === null) return obj;

        let source: Partial<T>, prop: keyof T;

        for (let i = 0, length = sources.length; i < length; i++) {
            source = sources[i];

            for (prop in source) {
                if (hasOwnProperty.call(source, prop)) {
                    obj[prop] = source[prop]! as any;
                }
            }
        }

        return obj;
    }
}