import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";

import { Movies, MovieInformation, NavBar, Profile, Actors } from ".";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main>
        <Switch>
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

          {/* Add more routes for other pages */}
          <Route component={() => <h1>Page not found</h1>} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
