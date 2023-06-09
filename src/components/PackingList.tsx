import { useState } from 'react';
import { IItem } from '../types/IItem';
import PackingItem from './PackingItem';

interface PackingListProps {
  items: IItem[];
  onDeleteItem(id: number): void;
  onToggleCheck(id: number): void;
  onDeleteAllItems(): void;
}

function PackingList({
  items,
  onDeleteItem,
  onToggleCheck,
  onDeleteAllItems,
}: PackingListProps) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems: IItem[] = items;

  if (sortBy === 'description') {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === 'packed') {
    sortedItems = items.slice().sort((a, b) => +a.packed - +b.packed);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map(item => (
          <PackingItem
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleCheck={onToggleCheck}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onDeleteAllItems}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;
