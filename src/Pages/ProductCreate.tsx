import React, { useState } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import useProductCreateStore from "../store/createProductStore";
import styles from "../Styles/ProductCreate.module.scss";

interface ProductFormProps {
  open: boolean;
  onClose: () => void;
}

const ProductCreate: React.FC<ProductFormProps> = ({ open, onClose }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const { addProduct } = useProductCreateStore((state) => ({
    addProduct: state.addProduct,
  }));

  const handleSubmit = () => {
    if (title && price && category && description && image) {
      const newProduct = {
        id: Date.now(),
        title,
        price: parseFloat(price),
        category,
        description,
        image,
      };
      addProduct(newProduct);
      onClose();
    } else {
      alert("Todos los campos son obligatorios");
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Crear Producto</DialogTitle>
      <DialogContent>
        <TextField
          className={styles.textField}
          label="Título"
          variant="outlined"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          className={styles.textField}
          label="Precio"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          className={styles.textField}
          label="Categoría"
          variant="outlined"
          fullWidth
          margin="normal"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <TextField
          className={styles.textField}
          label="Descripción"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          className={styles.textField}
          label="Imagen URL"
          variant="outlined"
          fullWidth
          margin="normal"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Crear
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductCreate;
