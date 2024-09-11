import create from 'zustand';
interface ProductCreate {
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

interface ProductCreateState {  
    product: ProductCreate;
    setProduct: (product: ProductCreate) => void;
    addProduct: (product: ProductCreate) => void;
}

const useProductCreateStore = create<ProductCreateState>((set) => ({
    product: {
        title: '',
        price: 0,
        category: '',
        description: '',
        image: '',
    },
    setProduct: (product) => set({ product }),
    addProduct: (product) => set({ product: product }),
}));

export default useProductCreateStore;