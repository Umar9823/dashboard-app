import React from "react";
import { Avatar, List, ListItem, ListItemIcon, Tooltip } from "@mui/material";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined"; 
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined"; 
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"; 
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined"; 
import "boxicons";

const SidebarLeft = () => {
  const icons = [
    { icon: <GridViewOutlinedIcon />, label: "My Option" },
    { icon: <ApartmentOutlinedIcon />, label: "Apartment" },
    { icon: <GroupsOutlinedIcon />, label: "People" },
    { icon: <CalendarMonthOutlinedIcon />, label: "Calendar" },
    { icon: <StickyNote2OutlinedIcon />, label: "Assignments" },
    { icon: <AttachMoneyOutlinedIcon />, label: "Payments" },
  ];

  return (
    <div
      style={{
        width: "55px",
        backgroundColor: "#ffffff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "20px",
        borderRight: "1px solid #e1e2e4",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Avatar
          src="./logo.png"
          alt="User Avatar"
          style={{
            width: "40px",
            height: "40px",
            marginBottom: "10px",
          }}
        />
        <div
          style={{
            width: "140%",
            height: "0.7px",
            backgroundColor: "#e1e2e4",
            marginBottom: "12px",
          }}
        />
        <List style={{ padding: 0 }}>
          {icons.map((item, index) => (
            <Tooltip
              key={index}
              title={item.label}
              arrow
              placement="right"
              sx={{
                "& .MuiTooltip-tooltip": {
                  backgroundColor: "#333",
                  color: "#fff",
                  fontSize: "1.5rem",
                  padding: "10px",
                },
              }}
            >
              <ListItem button style={{ padding: "10px 0" }}>
                <ListItemIcon style={{ minWidth: "40px", justifyContent: "center" }}>
                  {item.icon}
                </ListItemIcon>
              </ListItem>
            </Tooltip>
          ))}
        </List>
      </div>
      <div style={{ marginBottom: "12px" }}>
        <Tooltip
          title="Logout"
          arrow
          placement="right"
          sx={{
            "& .MuiTooltip-tooltip": {
              backgroundColor: "#4c5563",
              color: "#fff",
              fontSize: "1.5rem",
              padding: "10px",
            },
          }}
        >
          <ListItem button style={{ padding: "10px 0" }}>
            <ListItemIcon style={{ minWidth: "40px", justifyContent: "center" }}>
              <box-icon name="log-out-circle" color="red"></box-icon>
            </ListItemIcon>
          </ListItem>
        </Tooltip>
      </div>
    </div>
  );
};

export default SidebarLeft;
