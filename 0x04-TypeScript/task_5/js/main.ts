// task_5/js/main.ts

// Define the MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: 'major';
}

// Define the MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: 'minor';
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major',
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor',
  };
}

// Example usage:
const major1: MajorCredits = { credits: 30, brand: 'major' };
const major2: MajorCredits = { credits: 20, brand: 'major' };

const minor1: MinorCredits = { credits: 10, brand: 'minor' };
const minor2: MinorCredits = { credits: 15, brand: 'minor' };

console.log(sumMajorCredits(major1, major2)); // { credits: 50, brand: 'major' }
console.log(sumMinorCredits(minor1, minor2)); // { credits: 25, brand: 'minor' }

