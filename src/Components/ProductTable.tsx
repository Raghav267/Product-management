import React, { useState } from 'react';
import { useProductContext } from '../Context/ProductContext';

export const ProductTable = () => {
  const { variants } = useProductContext();
  const [groupBy, setGroupBy] = useState('Size');

  const groupVariants = (variants: any[], groupBy: string) => {
    return variants.reduce((acc: any, variant) => {
      const key = groupBy === 'Size' ? variant.size : variant.color;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(variant);
      return acc;
    }, {});
  };

  const groupedVariants = groupVariants(variants, groupBy);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Product Variants</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">Group by:</label>
        <select
          value={groupBy}
          onChange={(e) => setGroupBy(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="Size">Size</option>
          <option value="Color">Color</option>
        </select>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Group</th>
            <th className="py-2">Size</th>
            <th className="py-2">Color</th>
            <th className="py-2">Price</th>
            <th className="py-2">Available</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(groupedVariants).map((key) => (
            <React.Fragment key={key}>
              <tr>
                <td className="border px-4 py-2" rowSpan={groupedVariants[key].length + 1}>
                  {key}
                </td>
              </tr>
              {groupedVariants[key].map((variant: any, index: number) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{variant.size}</td>
                  <td className="border px-4 py-2">{variant.color}</td>
                  <td className="border px-4 py-2">{variant.price}</td>
                  <td className="border px-4 py-2">{variant.available}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};
