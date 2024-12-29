import { Close } from "@mui/icons-material"
import { Box, IconButton, Modal } from "@mui/material"

const ImageModal = ({ selectedImage, setSelectedImage }) => {
    return (<Modal
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        aria-labelledby="image-modal"
        aria-describedby="full-size-project-image"
    >
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '90vw',
            maxHeight: '90vh',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 1,
            borderRadius: 2,
            outline: 'none',
        }}>
            <IconButton
                onClick={() => setSelectedImage(null)}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    '&:hover': {
                        bgcolor: 'rgba(0, 0, 0, 0.7)',
                    }
                }}
            >
                <Close />
            </IconButton>
            <img
                src={selectedImage}
                alt="Full size project"
                style={{
                    maxWidth: '100%',
                    maxHeight: '85vh',
                    objectFit: 'contain',
                    display: 'block'
                }}
            />
        </Box>
    </Modal>)
}



export default ImageModal