import { Button } from "@mui/material";
import BaseModal from "../BaseModal";

export const ProductDeleteModal = ({ open, handleClose,product }) => {
    const handleProductDelete = () => {
      handleClose();
    };
  
    return (
      <BaseModal
        open={open}
        handleClose={handleClose}
        title="Uyarı"
        content={
          <div>
            <p>{product && product.productName} silmek istediğinizden emin misiniz?</p>
            <Button onClick={handleProductDelete}>Sil</Button>
          </div>
        }
      />
    );
  };