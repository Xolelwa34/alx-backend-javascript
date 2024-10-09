interface MajorCredits {
  credits: number;
  // Adding a brand to uniquely identify MajorCredits
  __brand: 'MajorCredits';
}

interface MinorCredits {
  credits: number;
  // Adding a brand to uniquely identify MinorCredits
  __brand: 'MinorCredits';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MajorCredits', // Ensuring the brand is preserved
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MinorCredits', // Ensuring the brand is preserved
  };
}

// Example usage
const major1: MajorCredits = { credits: 30, __brand: 'MajorCredits' };
const major2: MajorCredits = { credits: 20, __brand: 'MajorCredits' };
const minor1: MinorCredits = { credits: 15, __brand: 'MinorCredits' };
const minor2: MinorCredits = { credits: 10, __brand: 'MinorCredits' };

const totalMajorCredits = sumMajorCredits(major1, major2);
const totalMinorCredits = sumMinorCredits(minor1, minor2);

console.log(totalMajorCredits); // { credits: 50, __brand: 'MajorCredits' }
console.log(totalMinorCredits); // { credits: 25, __brand: 'MinorCredits' }

