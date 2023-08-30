import * as React from 'react';

export const List = ({ list }: { list: string[] }) => {
  return (
    <div
      style={{
        border: '3px solid red',
        marginTop: 10,
        padding: 10,
      }}
    >
      <h1>Values</h1>
      {list && <p>List is empty</p>}
      <ul>
        {list.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </div>
  );
};
