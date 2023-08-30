import * as React from 'react';
import { useState } from 'react';

export const Form = ({ onChange }: { onChange: (value: string) => void }) => {
  const [value, setValue] = useState('');
  return (
    <div
      style={{
        border: '3px solid blue',
        marginTop: 10,
        padding: 10,
      }}
    >
      <p>Add new value</p>
      <input
        value={value}
        onChange={(evt) => {
          setValue(evt.target.value);
        }}
      />
      <button
        onClick={() => {
          onChange(value);
          setValue('');
        }}
      >
        Submit
      </button>
    </div>
  );
};
