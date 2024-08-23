import React from "react";
import { Avatar, Menu, MenuItem, IconButton, Typography, ListItemIcon } from "@mui/material";
import StopCircleOutlinedIcon from "@mui/icons-material/StopCircleOutlined";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import 'boxicons'; 

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [activeItem, setActiveItem] = React.useState(""); 

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (item) => {
        setActiveItem(item);
        handleClose(); 
    };

    return (
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", padding: "0 16px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", marginRight: "16px", backgroundColor: "#f3f4f5", padding: "8px", borderRadius: "8px" }}>
                    <div style={{ marginRight: "8px" }}>00:03:20</div>
                    <StopCircleOutlinedIcon style={{ color: "#ff8082" }} />
                </div>
                <div style={{ height: "30px", borderLeft: "3px solid #ddd", marginRight: "16px" }}></div>
                <IconButton onClick={handleClick} style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar 
                        src="./profile.png" 
                        alt="Profile Image" 
                        sx={{ border: "2px solid black" }} 
                    />
                    <KeyboardArrowDownOutlinedIcon style={{ color: "#000", marginLeft: "4px" }} />
                </IconButton>
                <Menu
                    id="profile-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            padding: "8px",
                            width: "224px",
                        },
                    }}
                >
                    <div style={{ padding: "16px", display: "flex", alignItems: "center" }}>
                        <Avatar sx={{ width: 48, height: 48, marginRight: "16px", border: "2px solid black" }} src="./profile.png" alt="Profile Image" />
                        <div>
                            <Typography variant="body1" style={{ fontWeight: "bold" }}>John Doe</Typography>
                            <Typography variant="body2" color="textSecondary">Software Engineer</Typography>
                        </div>
                    </div>
                    <MenuItem
                        onClick={() => handleMenuItemClick("Profile")}
                        style={{
                            fontWeight: "bold",
                            backgroundColor: activeItem === "Profile" ? "#f3f4f5" : "transparent",
                            borderRadius:"8px",
                        }}
                    >
                        <ListItemIcon>
                            <AccountCircleOutlinedIcon />
                        </ListItemIcon>
                        <Typography variant="inherit">
                            Profile
                        </Typography>
                    </MenuItem>
                    <MenuItem
                        onClick={() => handleMenuItemClick("Account Settings")}
                        style={{
                            fontWeight: "bold",
                            backgroundColor: activeItem === "Account Settings" ? "#f3f4f5" : "transparent",
                            borderRadius:"8px",
                        }}
                    >
                        <ListItemIcon>
                            <SettingsOutlinedIcon />
                        </ListItemIcon>
                        <Typography variant="inherit">
                            Account Settings
                        </Typography>
                    </MenuItem>
                    <MenuItem
                        onClick={() => handleMenuItemClick("Logout")}
                        style={{
                            color: "red",
                            display: "flex",
                            alignItems: "center",
                            fontWeight: "bold",
                            backgroundColor: activeItem === "Logout" ? "#f3f4f5" : "transparent",
                            borderRadius:"8px",
                        }}
                    >
                        <box-icon name='log-out-circle' color="red" style={{ marginRight: "8px"}}></box-icon>
                        <Typography variant="inherit">
                            Logout
                        </Typography>
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
};

export default Header;
