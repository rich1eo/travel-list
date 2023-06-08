import { IItem } from '../types/IItem';

interface PackingItemProps {
  item: IItem;
}

function PackingItem({ item }: PackingItemProps) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

export default PackingItem;
