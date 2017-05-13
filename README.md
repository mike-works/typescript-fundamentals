<p align='center'>
  <a href="https://mike.works" target='_blank'>
    <img height=40 src='https://assets.mike.works/img/login_logo-33a9e523d451fb0d902f73d5452d4a0b.png' />
  </a> 
</p>
<p align='center'>
  <a href="https://mike.works/course/typescript-fundamentals-7832c19" target='_blank'>
    <img src='https://cloud.githubusercontent.com/assets/558005/25579415/1afbffaa-2e78-11e7-9b4a-ea44ead26bfb.png' />
  </a>
</p> 

This is the example project used for the [Mike.Works](https://mike.works) [TypeScript Fundamentals](https://mike.works/course/typescript-fundamentals-7832c19) course.

# What are the pieces?

* [Webpack 2](https://webpack.js.org)
* [TypeScript](https://www.typescriptlang.org) 2.3, setup for experimental decorator support
* [TSLint](https://github.com/palantir/tslint) for linting, setup with a strict JSX-friendly set of rules
* [sass-loader](https://github.com/webpack-contrib/sass-loader) for traditional management of styles
* [Preact](https://github.com/developit/preact) v8 for building components (and [preact-compat](https://github.com/developit/preact-compat) so you can use it as you would use React)
* [Hot Loader v3](https://github.com/gaearon/react-hot-loader) so styles and JS are updated in place as you save source code
* [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) so compiled styles are external stylesheets instead of inline style blocks
* [Jest](http://facebook.github.io/jest/) as a testing platform

# How to use it

##### Start the Development Server
`npm start <exercise-name>`

##### Build Development Assets in the `/dist` folder
This will be an un-minified version of an exercise, and will include some webpack-specific tooling, intended only for development use

`npm run build:dev <exercise-name>`

##### Build Production Assets in the `/dist` folder
This will be an an optimized version of the exercise

`npm run build:dist <exercise-name>`

# The Exercise Folder
Exercises are standalone mini-projects with the following folder structure.
```sh
index.html   # HTML served for exercise
./src        # Scripts (ts, js, tsx and jsx)
./styles     # Styles
   ⌙ app.scss       #  (optional) Entry point for styles
./tests      # Tests
   ⌙ myfile.test.ts # Tests must have *.test.js or *.test.ts
```

# License
While the general license for this project is the BSD 3-clause, the exercises
themselves are proprietary and are licensed on a per-individual basis, usually
as a result of purchasing a ticket to a public workshop, or being a participant
in a private training.

Here are some guidelines for things that are **OK** and **NOT OK**, based on our
understanding of how these licenses work:

### OK
* Using everything in this project other than the exercises (or accompanying tests) 
to build a project used for your own free or commercial training material
* Copying code from build scripts, configuration files, tests and development 
harnesses that are not part of the exercises specifically, for your own projects
* As an owner of an individual license, using code from tests, exercises, or
exercise solutions for your own non-training-related project.

### NOT OK (without express written consent)
* Using this project, or any subset of 
exercises contained within this project to run your own workshops
* Writing a book that uses the code for these exercises
* Recording a screencast that contains one or more of this project's exercises 


# Copyright

&copy; 2017 [Mike.Works](https://mike.works), All Rights Reserved

###### This material may not be used for workshops, training, or any other form of instructing or teaching developers, without express written consent
