const company = 'Olivia Pope and Associates';

const fixer = {
  firstName: 'Olivia',
  lastName: 'Pope',
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  age: 38,
  company,
  nickname: 'The Fixer',
  [`${company} Job Function`]: 'Senior Director',
  getDesc() {
    return `Meet ${this.fullName()}, who works at ${company} and who is also known as ${this.nickname}.`;
  },
};

console.log(fixer.getDesc());
// running 'node scratch-files/object-literals/enhancedObjLiteral.js' should return 'Meet Olivia Pope, who works at Olivia Pope and Associates and who is also known as The Fixer.'
