import { FormEvent, useState } from 'react';
import { IItem } from '../types/IItem';

interface FormProps {
  onAddItems(item: IItem): void;
}

function Form({ onAddItems }: FormProps) {
  const [description, setDescription] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const item: IItem = {
      id: Math.trunc(Math.random() * 1000 + 1),
      description: description,
      packed: false,
      quantity: quantity,
    };
    setDescription('');
    setQuantity(1);

    onAddItems(item);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={e => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
