import * as path from "path";
import * as ts from "typescript";

function isDefined<T>(x: T | undefined): x is T {
  return typeof x !== "undefined";
}

// (1) Create the program
const program = ts.createProgram({
  options: {
    target: ts.ScriptTarget.ESNext
  },
  rootNames: [
    // path to ../examples/hello-ts/src/index.ts
    path.join(__dirname, "..", "examples", "hello-ts", "src", "index.ts")
  ]
});

// // (2) Get the non-declaration (.d.ts) source files (.ts)
// const nonDeclFiles = program
//   .getSourceFiles()
//   .filter(sf => !sf.isDeclarationFile);

// // (3) get the type-checker
// const checker = program.getTypeChecker();

// /**
//  * (4) use the type checker to obtain the
//  * -   appropriate ts.Symbol for each SourceFile
//  */
// const sfSymbols = nonDeclFiles
//   .map(f => checker.getSymbolAtLocation(f))
//   .filter(isDefined); // here's the type guard to filter out undefined

// // (5) for each SourceFile Symbol
// sfSymbols.forEach(sfSymbol => {
//   const { exports: fileExports } = sfSymbol;
//   console.log(sfSymbol.name);
//   if (fileExports) {
//     // - if there are exports
//     console.log("== Exports ==");
//     fileExports.forEach((value, key) => {
//       // - for each export
//       console.log(
//         key, // - log its name

//         // - and its type (stringified)
//         checker.typeToString(checker.getTypeAtLocation(value.valueDeclaration))
//       );
//       const jsDocTags = value.getJsDocTags();
//       if (jsDocTags.length > 0) {
//         // - if there are JSDoc comment tags
//         console.log(
//           // - log them out as key-value pairs
//           jsDocTags.map(tag => `\t${tag.name}: ${tag.text}`).join("\n")
//         );
//       }
//     });
//   }
// });
