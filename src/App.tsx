import * as React from 'react';
import { Form } from './Form';
import { List } from './List';
import './style.css';

export default function App() {
  const [list, setList] = React.useState<string[]>([]);
  return (
    <div>
      <h1>Hello!</h1>
      <p>Please can you make this exercise:</p>
      <ul>
        <li>Create 1 component with a text box and button</li>
        <li>
          Create 1 component with a list of names submitted by the first
          component
        </li>
      </ul>
      <Form onChange={(value) => setList([value, ...list])} />
      <List list={list} />
    </div>
  );
}
