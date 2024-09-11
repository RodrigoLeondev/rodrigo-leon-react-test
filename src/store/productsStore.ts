import create from 'zustand';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface ProductState {
  products: Product[];
  fetchProducts: () => void;
  setProducts: (products: Product[]) => void;
}

const useProductStore = create<ProductState>((set) => ({
  products: JSON.parse(localStorage.getItem('products') || '[]'), 

  fetchProducts: async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      set({ products: response.data });
      localStorage.setItem('products', JSON.stringify(response.data)); 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },

  setProducts: (products) => {
    set({ products });
    localStorage.setItem('products', JSON.stringify(products));
  },
}));

export default useProductStore;
