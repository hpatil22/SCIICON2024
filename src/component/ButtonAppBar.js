import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import { userAuth } from "paninian-user-auth";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

// const { LoginButton, useAuth, LogoutButton } = userAuth();

export default function ButtonAppBar() {
  // const { isLoading, isAuthenticated } = useAuth();
  const { isAuthenticated ,loginWithRedirect,logout} = useAuth0();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src="/img/Hru3dai_Logo.png" alt="Hru3dai" width="140px" />
          <div style={{position:"absolute" , right:120 , display:"flex"}}>
          <img src="/img/scii.gif" alt="Hru3dai" width="60px" height="60vh" style={{marginTop:"3px"}}></img>
          <h2 style={{textAlign:"center", alignItems:"center"}}>2024</h2>
          <h3 style={{marginLeft:"2px", marginTop:"24px"}}>Innovation meet Intelligence </h3>

          </div>
          <div>
            {!isAuthenticated && <Button onClick={() => loginWithRedirect()} style={{backgroundColor:"#e8543e" , color:"white"}}>Login</Button>}
            {isAuthenticated && <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} style={{backgroundColor:"#e8543e" , color:"white"}}>Logout</Button>}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
