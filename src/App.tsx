import { useState } from 'react';
import Form from './components/Form';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import { IItem } from './types/IItem';

const initialItems: IItem[] = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
  { id: 3, description: 'Charger', quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState<IItem[]>(initialItems);

  function handleSubmit(item: IItem) {
    setItems(curItems => [item, ...curItems]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onSubmit={handleSubmit} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}
