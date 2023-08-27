import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const BaseModal = ({ open, handleClose, title, content }) => {
  const customStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    outline: 'none',
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={customStyle}>
        <Typography variant="h6" component="h2" color="primary.main">
          {title}
        </Typography>
        {content}
        <Button onClick={handleClose} style={{ margin: '10px 0' }}>
          Close 
        </Button>
      </Box>
    </Modal>
  );
};

export default BaseModal;
