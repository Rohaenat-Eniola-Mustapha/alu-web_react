const MAJOR_CREDIT_BRAND = Symbol('MAJOR_CREDIT_BRAND');
const MINOR_CREDIT_BRAND = Symbol('MINOR_CREDIT_BRAND');

export interface MajorCredits {
  [MAJOR_CREDIT_BRAND]: void;
  credits: number;
}

export interface MinorCredits {
  [MINOR_CREDIT_BRAND]: void;
  credits: number;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        [MAJOR_CREDIT_BRAND]: undefined,
        credits: subject1.credits + subject2.credits,
    };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    [MINOR_CREDIT_BRAND]: undefined,
    credits: subject1.credits + subject2.credits,
  };
}

// Example Usage
const majorSubject1: MajorCredits = { [MAJOR_CREDIT_BRAND]: undefined, credits: 3 };
const majorSubject2: MajorCredits = { [MAJOR_CREDIT_BRAND]: undefined, credits: 4 };
const minorSubject1: MinorCredits = { [MINOR_CREDIT_BRAND]: undefined, credits: 2 };
const minorSubject2: MinorCredits = { [MINOR_CREDIT_BRAND]: undefined, credits: 1 };

const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

console.log('Total Major Credits:', totalMajorCredits);
console.log('Total Minor Credits:', totalMinorCredits);