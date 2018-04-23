const company = 'Pope and Associates';

interface FixerInt {
  firstName: string,
  lastName: string,
  fullName: () => string,
  age: number,
  company: string,
  // [`${company} Job Function`]: string,
}

const fixer: FixerInt = {
  firstName: 'Olivia',
  lastName: 'Pope',
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  age: 38,
  company,
  // [`${company} Job Function`]: 'Senior Director',
};
