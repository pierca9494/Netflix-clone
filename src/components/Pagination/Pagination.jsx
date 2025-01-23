import React from "react";
import { Typography, Button } from "@mui/material";
import useStyles from "./styles";

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const classes = useStyles();

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setPage(currentPage + 1);
    }
  };
  if (totalPages === 0) return null;

  return (
    <div className={classes.container}>
      <Button
        onClick={handlePreviousPage}
        className={classes.button}
        variant="contained"
        color="primary"
      >
        Previous
      </Button>
      <Typography variant="h4" className={classes.pageNumber}>
        {currentPage}
      </Typography>
      <Button
        onClick={handleNextPage}
        className={classes.button}
        variant="contained"
        color="primary"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
