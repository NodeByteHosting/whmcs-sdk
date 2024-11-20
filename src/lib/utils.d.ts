export declare const utils: {
    /**
     * Extend properties of one object with one or more Objects
     * @param obj Object to extend
     * @returns Object
     */
    extend: <T>(obj: T, ...sources: Partial<T>[]) => T;
};
