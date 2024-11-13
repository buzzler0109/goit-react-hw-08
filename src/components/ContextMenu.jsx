import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contacts/operations";
import EditForm from "./editForm/editForm";
import toast, { Toaster } from "react-hot-toast";

export default function BasicMenu({ contact }) {
  const dispatch = useDispatch();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [currentModal, setCurrentModal] = React.useState(null);

  const menuOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModalClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const handleOpenModal = (modalType) => {
    setCurrentModal(modalType);
    setOpen(true);
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={menuOpen ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={menuOpen ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "gray", textAlign: "center" }}
      >
        Options
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleOpenModal("edit")}>Edit info</MenuItem>
        <MenuItem onClick={() => handleOpenModal("delete")}>
          Delete contact
        </MenuItem>
      </Menu>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleModalClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {currentModal === "edit" && <EditForm contact={contact} />}{" "}
            {currentModal === "delete" && (
              <>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Do you really want to delete this contact?
                </Typography>
                <>
                  <Button
                    onClick={() => {
                      dispatch(deleteContact(contact));
                      toast.success("Contact has been successefully deleted", {
                        position: "bottom-center",
                      });
                    }}
                  >
                    Delete
                  </Button>
                  <Toaster />
                </>
                <Button onClick={() => handleModalClose()}>Cancel</Button>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
