import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Switch, Redirect } from "react-router-dom";

import useStyles from "./styles";
import { Movies, MovieInformation, NavBar, Profile, Actors } from ".";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          {/* Homepage Route */}
          <Route exact path="/">
            <Movies /> {/* Assuming Movies is the homepage */}
          </Route>

          {/* Other Routes */}
          <Route exact path="/movieinformation/:id">
            <MovieInformation />
          </Route>
          <Route exact path="/movies/:id">
            <Movies />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>

          {/* Fallback Route for Undefined Pages */}
          <Route component={() => <h1>Page not found</h1>} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
