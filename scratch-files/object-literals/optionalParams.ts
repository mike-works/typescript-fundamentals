interface YBEntry {
  (name: string, classYear: number, ...attributes: string[]): object,
}

const yearbookEntry: YBEntry = (name, classYear, ...attributes) => {
  return {
    name,
    classYear,
    ...attributes,
  }
}

console.log(yearbookEntry('Zach Morris', 1995, 'Popular', 'blonde', 'loves Kelly'));
