import React from "react";
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      Header
      <p>
        <NavLink to="/todos">Todos</NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
