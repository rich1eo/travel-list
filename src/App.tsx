import { useState } from 'react';
import Form from './components/Form';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import { IItem } from './types/IItem';

const initialItems: IItem[] = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Charger', quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState<IItem[]>(initialItems);

  function handleAddItems(item: IItem) {
    setItems(curItems => [item, ...curItems]);
  }

  function handleDeleteItem(id: number) {
    setItems(curItems => curItems.filter(item => item.id !== id));
  }

  function handleDeleteAllItems() {
    const confirm = window.confirm(
      'Are you sure you want to delete all items?'
    );
    if (confirm) setItems([]);
  }

  function handleToggleCheck(id: number) {
    setItems(curItems =>
      curItems.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onDeleteAllItems={handleDeleteAllItems}
        onToggleCheck={handleToggleCheck}
      />
      <Stats items={items} />
    </div>
  );
}
