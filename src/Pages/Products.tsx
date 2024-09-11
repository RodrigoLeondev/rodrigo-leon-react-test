import React, { useEffect } from "react";
import useProductStore from "../store/productsStore";
import ProductTable from "../Components/productTable";
import styles from "../Styles/Products.module.scss";
import NavBar from "../Components/Navbar";

const Products: React.FC = () => {
  const { products, fetchProducts } = useProductStore((state) => ({
    products: state.products,
    fetchProducts: state.fetchProducts,
  }));

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [products, fetchProducts]);

  return (
    <div className={styles.productsContainer}>
      <NavBar />
      <ProductTable />
    </div>
  );
};

export default Products;
