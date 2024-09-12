import { create } from 'zustand';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface ProductState {
  [x: string]: any;
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (id: number, updatedProduct: Product) => void;
  deleteProduct: (id: number) => void;
}

const useProductStore = create<ProductState>((set) => ({
  products: JSON.parse(localStorage.getItem('products') || '[]'), 

  addProduct: (newProduct: Product) =>
    set((state) => {
      const updatedProducts = [...state.products, newProduct];
      localStorage.setItem('products', JSON.stringify(updatedProducts)); 
      return { products: updatedProducts };
    }),

  updateProduct: (id: number, updatedProduct: Product) =>
    set((state) => {
      const updatedProducts = state.products.map((product) =>
        product.id === id ? updatedProduct : product
      );
      localStorage.setItem('products', JSON.stringify(updatedProducts)); 
      return { products: updatedProducts };
    }),

  deleteProduct: (id: number) =>
    set((state) => {
      const updatedProducts = state.products.filter((product) => product.id !== id);
      localStorage.setItem('products', JSON.stringify(updatedProducts)); 
      return { products: updatedProducts };
    }),
}));

export default useProductStore;
