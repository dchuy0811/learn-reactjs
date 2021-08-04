import React, { useEffect } from 'react';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import categoryApi from './api/categoryApi';
import CounterFeature from './features/Counter';
import './App.css';
import Header from 'components/Header';

function App() {
  useEffect(() => {
    const fetchCategories = async () => {
      const params = {
        _limit: 3,
      };
      const categoryList = await categoryApi.getAll(params);
      console.log(categoryList);
    };
    fetchCategories();
  }, []);

  return (
    <div className="App">
      <Header />

      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
