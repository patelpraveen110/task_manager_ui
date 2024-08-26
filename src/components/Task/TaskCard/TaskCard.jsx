import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UserList from "../UserList";
import SubmissionList from "./SubmissionList";
import EditTaskCard from "./EditTaskCard";

const role = "ROLE_ADMIN";
const TaskCard = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [openUserList, setOpenUserList]=useState(false)
  const handleCloseUserList = () => {
    setOpenUserList(false);
  };
  const handleOpenUserList = () => {
    setOpenUserList(true);
    handleMenuClose();
  };

  const [openSubmissionList, setOpenSubmissionList]=useState(false)
  const handleCloseSubmissionList = () => {
    setOpenSubmissionList(false);
  };
  const handleOpenSubmissionList = () => {
    setOpenSubmissionList(true);
    handleMenuClose();
  };

  const [openUpdateTaskForm, setOpenUpdateTaskForm]=useState(false)
  const handleCloseUpdateTaskModel = () => {
    setOpenUpdateTaskForm(false);
  };
  const handleOpenUpdateTaskModel = () => {
    setOpenUpdateTaskForm(true);
    handleMenuClose();
  };

  const handleDeleteTask = () => {
    handleMenuClose();
  };

  return (
    <div>
      <div className="card lg:flex justify-between">
        <div className="lg:flex gap-5 items-center space-y-2 w-[30%] lg:w-[70%]">
          <div className="">
            <img
              className="lg:w-[7rem] lg:h-[7rem] object-cover"
              src="https://digitalvitae.netlify.app/assets/react-DbavuWM8.png"
              alt=""
            />
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <h1 className="font-bold text-lg ">Car Rental Website</h1>
              <p className="text-gray-500 text-sm">
                use latest frameworks and technologies to make this website
              </p>
            </div>

            <div className="flex flex-wrap gap-2 item-center">
              {[1, 1, 1, 1].map((item) => (
                <span
                  className="py-1 px-5 
                    rounded-fill techStack"
                >
                  React
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <IconButton
            id="basic-button"
            aria-controls={openMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={handleMenuClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {role == "ROLE_ADMIN" ? (
              <>
                <MenuItem onClick={handleOpenUserList}>Assigned User</MenuItem>
                <MenuItem onClick={handleOpenSubmissionList}>
                  Submissions
                </MenuItem>
                <MenuItem onClick={handleOpenUpdateTaskModel}>Edit</MenuItem>
                <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
              </>
            ) : (
              <></>
            )}
          </Menu>
        </div>
      </div>

      <UserList open={openUserList} handleClose={handleCloseUserList}/>
      <SubmissionList open={openSubmissionList} handleClose={handleCloseSubmissionList}/>
      <EditTaskCard open={openUpdateTaskForm} handleClose={handleCloseUpdateTaskModel}/>
      
    </div>
  );
};

export default TaskCard;
