"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumMajorCredits = sumMajorCredits;
exports.sumMinorCredits = sumMinorCredits;
var MAJOR_CREDIT_BRAND = Symbol('MAJOR_CREDIT_BRAND');
var MINOR_CREDIT_BRAND = Symbol('MINOR_CREDIT_BRAND');
function sumMajorCredits(subject1, subject2) {
    var _a;
    return _a = {},
        _a[MAJOR_CREDIT_BRAND] = undefined,
        _a.credits = subject1.credits + subject2.credits,
        _a;
}
function sumMinorCredits(subject1, subject2) {
    var _a;
    return _a = {},
        _a[MINOR_CREDIT_BRAND] = undefined,
        _a.credits = subject1.credits + subject2.credits,
        _a;
}
// Example Usage
var majorSubject1 = (_a = {}, _a[MAJOR_CREDIT_BRAND] = undefined, _a.credits = 3, _a);
var majorSubject2 = (_b = {}, _b[MAJOR_CREDIT_BRAND] = undefined, _b.credits = 4, _b);
var minorSubject1 = (_c = {}, _c[MINOR_CREDIT_BRAND] = undefined, _c.credits = 2, _c);
var minorSubject2 = (_d = {}, _d[MINOR_CREDIT_BRAND] = undefined, _d.credits = 1, _d);
var totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
var totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
console.log('Total Major Credits:', totalMajorCredits);
console.log('Total Minor Credits:', totalMinorCredits);
