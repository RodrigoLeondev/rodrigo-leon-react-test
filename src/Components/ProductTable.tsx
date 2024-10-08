import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useProductStore from '../store/productsStore';
import styles from '../Styles/ProductTable.module.scss';
import ProductDetail from '../Components/ProductDetail';
import ProductCreate from '../Pages/ProductCreate';

const ProductTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const { products } = useProductStore((state) => ({
    products: state.products,
  }));

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);

  const filteredProducts = products.filter((product) =>
    Object.values(product).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getPaginationGroup = () => {
    let startPage = Math.max(currentPage - 2, 1);
    let endPage = Math.min(currentPage + 2, totalPages);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const columns: GridColDef[] = [
    { field: 'title', headerName: 'Producto', width: 300 },
    { field: 'price', headerName: 'Precio', width: 150, align: 'center' },
    { field: 'category', headerName: 'Categoría', width: 150 },
    {
      field: 'description',
      headerName: 'Descripción',
      width: 400,
    },
    {
      field: 'image',
      headerName: 'Imagen previa',
      width: 400,
      align: 'center',
      renderCell: (params) => (
        <img
          src={params.value}
          alt={params.row.title}
          style={{ width: '100px', height: 'auto' }}
        />
      ),
    },
    {
      field: 'action',
      headerName: 'Opciones',
      sortable: false,
      width: 200,
      align: 'center',
      renderCell: (params) => (
        <button
          className={styles.detailButton}
          onClick={() => {
            setSelectedProduct(params.row);
            setOpenDialog(true);
          }}
        >
          Ver Detalles
        </button>
      ),
    },
  ];

  return (
    <div className={styles.tableContainer}>
      <Paper elevation={3} className={styles.tablePaper}>
        <TextField
          label="Buscar"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={currentProducts} columns={columns} hideFooter />
        </div>
      </Paper>

      <div className={styles.pagination}>
        {currentPage > 2 && (
          <>
            <button onClick={() => handlePageChange(1)}>1</button>
            <span>...</span>
          </>
        )}

        {getPaginationGroup().map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? styles.active : ''}
          >
            {page}
          </button>
        ))}

        {currentPage < totalPages - 2 && (
          <>
            <span>...</span>
            <button onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
          </>
        )}
      </div>

      <ProductCreate open={openCreateDialog} onClose={() => setOpenCreateDialog(false)} />

      <ProductDetail
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        product={selectedProduct}
      />

      <Button
        onClick={() => setOpenCreateDialog(true)}
        color="primary"
        variant="contained"
        style={{ marginTop: '16px' }}
      >
        Crear Producto
      </Button>
    </div>
  );
};

export default ProductTable;
