import { Box, Collapse, IconButton, Typography } from "@mui/material";
import React from "react";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SidebarMenu = ({ title, children, to, sx,  ...props }) => {
 
  const navigate = useNavigate()

  return (
    <>

      <Box
        sx={{
          mt: 1,pl:1,
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          ...sx,
        }}
        onClick={() => {
          if (to) navigate(to);
        }}
        {...props}
      >
        <Typography variant="p" fontWeight={"400"} sx={{ color: "white" , fontSize:"23px"}}>
          {title}
        </Typography>

        {children && (
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            
            color="inherit"
            sx={{mr:2}}

          >
            
          </IconButton>
        )}
      </Box>
      <Collapse  sx={{pl:2}} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </>
  );
};

export default SidebarMenu;