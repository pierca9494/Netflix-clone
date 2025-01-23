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
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  useGetRecommendationQuery,
  useGetActorQuery,
  useGetMoviesByActorIdQuery,
} from "../../services/TMDB";
import useStyles from "./styles";
import genreIcons from "../../assets/genres";
import { MovieList, Pagination } from "..";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";

const Actors = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetActorQuery(id);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const { data: movies, isFetching: isRecommendationsFetching } =
    useGetMoviesByActorIdQuery({
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
        <Button
          startIcon={<ArrowBack />}
          onClick={() => history.goBack()}
          color="primary"
        >
          Go back.
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Grid container sapcing={3}>
        <Grid item lg={5} xl={4}>
          <img
            className={classes.image}
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            alt={data.name}
          ></img>
        </Grid>
        <Grid
          item
          lg={7}
          xl={8}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" gutterBottom>
            {data.name}
          </Typography>
          <Typography variant="h5">
            Born: {new Date(data.birthday).toDateString()}
          </Typography>
          <Typography variant="body2" align="justify" paragraph>
            {data?.biography || "Sorry no biography yet ..."}
          </Typography>
          <Box marginTop="2rem" display="flex" justifyContent="space-around">
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href={`https://www.imdb.com/name/${data.imdb_id}/`}
            >
              IMDB
            </Button>
            <Button
              startIcon={<ArrowBack />}
              onClick={() => history.goBack()}
              color="primary"
            >
              Go back
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box marginTop="2rem 0">
        <Typography variant="h3" gutterBottom align="center">
          Movies by {data.name}
        </Typography>
        {movies && <MovieList movies={movies} numberOfMovies={12} />}
        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={movies?.total_pages}
        />
      </Box>
    </>
  );
};
//

export default Actors;
