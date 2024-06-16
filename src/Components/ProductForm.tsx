import React, { useState } from 'react';
import { useProductContext } from '../Context/ProductContext';

export const ProductForm = () => {
  const { sizes, colors, addVariant, addSize, addColor } = useProductContext();
  const [size, setSize] = useState(sizes[0]);
  const [color, setColor] = useState(colors[0]);
  const [price, setPrice] = useState<number>(0);
  const [available, setAvailable] = useState<number>(0);
  const [newSize, setNewSize] = useState('');
  const [newColor, setNewColor] = useState('');

  const handleAddVariant = () => {
    addVariant({ size, color, price, available });
    setPrice(0);
    setAvailable(0);
  };

  const handleAddSize = () => {
    if (newSize.trim() !== '') {
      addSize(newSize);
      setNewSize('');
    }
  };

  const handleAddColor = () => {
    if (newColor.trim() !== '') {
      addColor(newColor);
      setNewColor('');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Add Variant</h2>
      <div className="mb-2">
        <label className="block text-sm font-medium">Size</label>
        <select value={size} onChange={(e) => setSize(e.target.value)} className="border p-2 rounded">
          {sizes.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={newSize}
          onChange={(e) => setNewSize(e.target.value)}
          placeholder="Add new size"
          className="border p-2 rounded mt-2"
        />
        <button onClick={handleAddSize} className="bg-green-500 text-white p-2 rounded mt-2">
          Add Size
        </button>
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium">Color</label>
        <select value={color} onChange={(e) => setColor(e.target.value)} className="border p-2 rounded">
          {colors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={newColor}
          onChange={(e) => setNewColor(e.target.value)}
          placeholder="Add new color"
          className="border p-2 rounded mt-2"
        />
        <button onClick={handleAddColor} className="bg-green-500 text-white p-2 rounded mt-2">
          Add Color
        </button>
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium">Price</label>
        <input type="number" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} className="border p-2 rounded" />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium">Available</label>
        <input type="number" value={available} onChange={(e) => setAvailable(parseInt(e.target.value, 10))} className="border p-2 rounded" />
      </div>
      <button onClick={handleAddVariant} className="bg-blue-500 text-white p-2 rounded">
        Add Variant
      </button>
    </div>
  );
};
