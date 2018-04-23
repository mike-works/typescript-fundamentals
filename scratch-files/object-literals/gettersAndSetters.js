const prez = {
  first: 'Barack',
  last: 'Obama',
  number: 44,
  title: 'Former President',
  get properAddress() {
    return `The honorable ${this.title} ${this.first} ${this.last}.`;
  },
  set modifyTitle(newTitle) {
    this.title = newTitle;
  }
};

console.log(prez.properAddress);
prez.modifyTitle = 'Dr.';
console.log(prez.properAddress);
