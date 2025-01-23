import React, { useState } from "react";
import {
  Modal,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Box,
  CircularProgress,
  useMediaQuery,
  Rating,
} from "@mui/material";
import {
  Movie as MovieIcon,
  Theaters,
  Language,
  PlusOne,
  Favorite,
  FavoriteBorder,
  Outlined,
  Remove,
  ArrowBack,
  Movie,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  useGetRecommendationQuery,
  useGetActorQuery,
} from "../../services/TMDB";
import useStyles from "./styles";
import genreIcons from "../../assets/genres";
import { MovieList } from "..";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";

const Actors = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetActorQuery(id);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data: recommendations, isFetching: isRecommendationsFetching } =
    useGetRecommendationQuery({
      list: "recommendations",
      movie_id: id,
    });
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/">
          An error occurred while fetching the actor data. Go back.
        </Link>
      </Box>
    );
  }

  console.log(data);
  return <div>pier</div>;
};
//

export default Actors;
