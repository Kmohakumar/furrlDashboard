import React from 'react'
import { AppBar } from '@mui/material';
 

function Navbar() {
    

  return (
    <div>
    <AppBar color="primary"   height="200px" sx={{height:50 }}
    >
        <h1 style={{
        marginLeft:"auto",
        marginRight:"auto",
        marginTop: 0
    }}>Furrl</h1></AppBar></div>
  )
}

export default Navbar