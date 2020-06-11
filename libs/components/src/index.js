import React from 'react';

export const TestComponent = props => {
  const foo = 2;
  return <div>
    <h1>Test Component!!!</h1>
    <pre>
      {JSON.stringify(props, null, 2)}
    </pre>
  </div>;
};
