import { IItem } from '../types/IItem';
import PackingItem from './PackingItem';

interface PackingListProps {
  items: IItem[];
}

function PackingList({ items }: PackingListProps) {
  return (
    <div className="list">
      <ul>
        {items.map(item => (
          <PackingItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
