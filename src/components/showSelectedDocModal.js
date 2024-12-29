import { Box, Button, Modal, Typography } from "@mui/material";

const ShowSelectedDocModal = ({ isModalOpen, selectedDoc, handleCloseModal }) => {
  console.log(selectedDoc);
  
  return (
    <Modal open={isModalOpen} onClose={handleCloseModal}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50%',
          height: '80%',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 1,
          borderRadius: 2,
        }}
      >
        <Button
          onClick={handleCloseModal}
          sx={{
            borderRadius: 2,
            position: "absolute",
            top: -15,
            right: -15,
            backgroundColor: "whitesmoke",
            color: "gray",
            boxShadow: 4,
            minWidth: "0px",
            width: "33px",
            height: "33px",
            border: "2px solid transparent",
            "&:hover": {
              backgroundColor: "#e7eaeb",
              transform: "translateY(-5px)", // Buton hover'da yukarı kayacak
            },
            transition: "transform 0.2s ease-in-out", // Hareketin yumuşak olması için
          }}
        >
          X
        </Button>

        {/* PDF iframe */}
        <iframe
          src={selectedDoc}
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </Box>
    </Modal>
  );
};

export default ShowSelectedDocModal;
