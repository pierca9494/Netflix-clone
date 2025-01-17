import React, { useEffect } from "react";
import { Typography, Button, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { ExitToApp } from "@mui/icons-material";
import { logout, userSelector } from "../../features/auth";

const Profile = () => {
  const { user } = useSelector(userSelector);

  const logout = () => {
    localStorage.clear();

    const favoriteMovies = []

    window.location.href = "/";
  };

  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Typography variant="h4" gutterBottom>
          Welcome, {user.name}!
        </Typography>
        <Button variant="contained" color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies.lenght && ? }
    </Box>
  );
};

export default Profile;
