import React, {useState} from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import Button from '@mui/material/Button';
import "./App.css";
import Login from "./page/login";
import Nav from "./page/nav/Nav";


function App() {

  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false);
  };

  return( 
    <>
    <Dialog open={open}>
      <DialogTitle>Về chúng tôi</DialogTitle>
      <DialogContent>Xin chào! Đây là project môn học! Chúng tôi sử dụng với mục đích cá nhân trong thời gian ngắn, không nhầm mục đích thương mại. Cảm ơn vì đã quan tâm! <br/>Chúc một ngày tốt lành!</DialogContent>
      <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
      </DialogActions>
    </Dialog>
    <Nav />
    </>
  )
}

export default App;
