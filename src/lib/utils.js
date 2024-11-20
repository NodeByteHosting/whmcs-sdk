"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = void 0;
const hasOwnProperty = Object.prototype.hasOwnProperty;
;
exports.utils = {
    /**
     * Extend properties of one object with one or more Objects
     * @param obj Object to extend
     * @returns Object
     */
    extend: function (obj, ...sources) {
        if (typeof obj !== 'object' || obj === null)
            return obj;
        let source, prop;
        for (let i = 0, length = sources.length; i < length; i++) {
            source = sources[i];
            for (prop in source) {
                if (hasOwnProperty.call(source, prop)) {
                    obj[prop] = source[prop];
                }
            }
        }
        return obj;
    }
};
