import { Button } from '@mui/material';
import BaseModal from '../BaseModal';

export const ProductAddModal = ({ open, handleClose }) => {
  const handleProductAdd = () => {
    handleClose();
  };

  return (
    <BaseModal
      open={open}
      handleClose={handleClose}
      title="Ürün Ekle"
      content={
        <div>
          <input type="text" placeholder="Ürün Adı" />
          <input type="number" placeholder="Fiyat" />
          <Button onClick={handleProductAdd}>Ekle</Button>
        </div>
      }
    />
  );
};




