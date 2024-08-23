import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  InputAdornment,
  Divider,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import WeekendOutlinedIcon from "@mui/icons-material/WeekendOutlined";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const menuItems = [
    { text: "Dashboard", icon: <DashboardOutlinedIcon style={{ fontSize: "16px" }} /> },
    { text: "Feedbacks", icon: <FeedbackOutlinedIcon style={{ fontSize: "16px" }} /> },
    { text: "Leaves", icon: <WeekendOutlinedIcon style={{ fontSize: "16px" }} /> },
    { text: "Attendance", icon: <TodayOutlinedIcon style={{ fontSize: "16px" }} /> },
    { text: "Daily Timesheet", icon: <CalendarTodayOutlinedIcon style={{ fontSize: "16px" }} /> },
    { text: "Work Log", icon: <AssignmentTurnedInOutlinedIcon style={{ fontSize: "16px" }} /> },
    { text: "Reimbursements", icon: <AttachMoneyOutlinedIcon style={{ fontSize: "16px" }} /> },
    { text: "Reports", icon: <ReportOutlinedIcon style={{ fontSize: "16px" }} /> },
    { text: "My Expenses", icon: <AccountBalanceWalletOutlinedIcon style={{ fontSize: "16px" }} /> },
    { text: "Income", icon: <MonetizationOnOutlinedIcon style={{ fontSize: "16px" }} /> },
    { text: "Categories", icon: <CategoryOutlinedIcon style={{ fontSize: "16px" }} /> },
    { text: "Settings", icon: <SettingsOutlinedIcon style={{ fontSize: "16px" }} /> },
  ];

  return (
    <div
      style={{
        width: "230px",
        backgroundColor: "#ffffff",
        height: "100vh",
        paddingTop: "10px",
        borderRight: "1px solid #e1e2e4",
      }}
    >
      <TextField
        placeholder="Search"
        variant="outlined"
        size="small"
        style={{
          marginTop: "14px",
          marginBottom: "8px",
          marginLeft: "8px",
          marginRight: "20px",
          width: "90%",
          height: "30px",
        }}
        InputProps={{
          style: {
            height: "30px",
            fontSize: "12px", 
            fontWeight: "bold",
          },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ fontSize: "20px" }} />
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          style: { fontSize: "12px", fontWeight: "bold" }, 
        }}
      />

  
      <Divider style={{ margin: "8px 0", backgroundColor: "#e1e2e4" }} />

      
      <Typography variant="subtitle1" style={{ marginLeft: "16px", marginBottom: "0px", fontSize: "13px", fontWeight: "bold" }}>
        My Options
      </Typography>

    
      <List>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.text === "Reports" && <Divider style={{ margin: "8px 0", backgroundColor: "#e1e2e4" }} />}
            <ListItem
              button
              style={{
                paddingTop: "3px",
                paddingBottom: "3px",
                marginBottom: "1px",
                backgroundColor: activeTab === item.text ? "#f3f4f5" : "transparent", 
                borderRadius:"8px",
              }}
              onClick={() => setActiveTab(item.text)} 
            >
              <ListItemIcon style={{ minWidth: "24px" }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{ fontSize: "12px", fontWeight: "bold" }} 
              />
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
