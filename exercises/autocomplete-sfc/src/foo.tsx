import * as React from 'react';

interface FooProps {
  what: string
}

const Foo = ({ what }: FooProps) => (
  <div>
      <h1>Hello</h1>
      <h3>{what}</h3>
  </div>
);
export default Foo;
/**
 *  
 *   div(h1("Hello"), h3("World"))
 * 
 */