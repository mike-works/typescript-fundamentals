const dad = {
  name: {
    first: 'Peter',
    last: 'Griffin',
  },
  jobs: {
    companies: {
      name: {
        title: 'Pawtucket Brewery',
      },
    },
  },
};

const {
  name: { first },
  jobs: { companies: companyData },
} = dad;

console.log(`${first} - ${companyData.name.title}`);
// running 'node scratch-files/object-literals/destructuredAssignment.js' should output 'Peter - Pawtucket Brewery'
