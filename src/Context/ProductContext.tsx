import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Variant {
  size: string;
  color: string;
  price: number;
  available: number;
}

interface ProductContextType {
  variants: Variant[];
  sizes: string[];
  colors: string[];
  addVariant: (variant: Variant) => void;
  addSize: (size: string) => void;
  addColor: (color: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [variants, setVariants] = useState<Variant[]>([]);
  const [sizes, setSizes] = useState<string[]>(['Small', 'Medium']);
  const [colors, setColors] = useState<string[]>(['Blue', 'Red']);

  const addVariant = (variant: Variant) => {
    setVariants([...variants, variant]);
  };

  const addSize = (size: string) => {
    setSizes([...sizes, size]);
  };

  const addColor = (color: string) => {
    setColors([...colors, color]);
  };

  return (
    <ProductContext.Provider value={{ variants, sizes, colors, addVariant, addSize, addColor }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
