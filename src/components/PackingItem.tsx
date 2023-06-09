import { IItem } from '../types/IItem';

interface PackingItemProps {
  item: IItem;
  onDeleteItem(id: number): void;
  onToggleCheck(id: number): void;
}

function PackingItem({ item, onDeleteItem, onToggleCheck }: PackingItemProps) {
  function handleDeleteItem() {
    onDeleteItem(item.id);
  }

  function handleToggleCheck() {
    onToggleCheck(item.id);
  }

  return (
    <li>
      <input
        type="checkbox"
        value={+item.packed}
        onChange={handleToggleCheck}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleDeleteItem}>❌</button>
    </li>
  );
}

export default PackingItem;
