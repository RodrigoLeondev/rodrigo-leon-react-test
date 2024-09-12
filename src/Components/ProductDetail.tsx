import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import styles from "../Styles/ProductDetail.module.scss";
import { ProductDetailDialogProps } from "../Interfaces/ProductDetail";


const ProductDetail: React.FC<ProductDetailDialogProps> = ({
  open,
  onClose,
  product,
}) => {
  if (!product) return null;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent className={styles.dialogContent}>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>
          <strong>Precio: </strong>${product.price}
        </p>
        <p>
          <strong>Categoria: </strong>
          {product.category}
        </p>
        <p>
          <strong>Descripción: </strong>
          {product.description}
        </p>
      </DialogContent>
      <DialogActions className={styles.dialogActions}>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDetail;